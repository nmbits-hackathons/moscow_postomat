import numpy as np
import pandas as pd

from core.administrative_divisions import adm_areas, adm_districts
from core.model_datasets import model_results

RADIUS=0.4

def get_df(model_name):
    """
    model_name: model type chosen by user
    return: dataframe with marks from a corresponding model
    """
    return pd.read_csv(model_results[model_name]).iloc[:, 1:]

def get_houses_reester(district_by_area):
    """
    upload houses reester.csv
    """  
    house_reester_ = pd.read_csv('core/datasets/houses_reester.csv')
    house_reester_['lat'] = house_reester_['lat'].astype(float)
    house_reester_['lon'] = house_reester_['lon'].astype(float)
    house_reester_['population'] = house_reester_['population'].astype(float)

    return filter_by_placement(house_reester_, district_by_area)


def preprocess_placement_filters(areas, districts):
    """
    areas: administrative areas chosen by user 
    districts: administrative districts chosen by user 
    return: dict combining areas & districts
    {area #N: [corresponding districts]}
    """
    district_by_area = {}
    for area in areas:
        district_by_area[area] = []
    for district in districts:
        idx = [i for i, x in enumerate(list(adm_districts.values())) if district in x][0]
        district_area = list(adm_districts.keys())[idx]
        try:
            district_by_area[district_area].append(district)
        except KeyError:
            pass
    return district_by_area


def filter_by_placement(df, district_by_area):
    """
    df: dataframe with marks from some model
    district_by_area: districts & areas to select
    return: dataframe with zones only from district_by_area
    """
    filtered_df = pd.DataFrame()
    for k, v in district_by_area.items():
        area_df = df[df.area == adm_areas[k]]
        if len(v) != 0:
            district_df = area_df[area_df.district.apply(lambda x: x in v)]
            filtered_df = filtered_df.append(
                district_df, ignore_index=True)
        else:
            filtered_df = filtered_df.append(
                area_df, ignore_index=True)
    return filtered_df if len(filtered_df) > 0 else df


def get_proportions(places):
    """
    places: dict with user's preferences in zone types
    return: dict with non-zero proportions for each key
    """
    places_ = places.copy()
    places_.pop("auto")
    denominator = sum(list(places_.values()))
    proportions = {k: v / denominator for k, v in places_.items() if v > 0}
    return proportions


def filter_by_places(df, proportions):
    """
    df: dataframe with marks from some model
    proportions: dict with non-zero proportions for each key
    return: dataframe with zones only with selected types
    """
    if len(proportions) > 0:
        # user chose point types
        return df[df["type"].apply(lambda x: x in proportions.keys())]
    else:
        return df


def remove_neighbours(df, new_point, radius=RADIUS):
    """
    df: left points for the coverage
    new_point: (lat, lon) of the last added point
    radius: radius in kilometers
    return: df without neighbour points to the given one
    """
    lats = np.array(df["lat"])
    lons = np.array(df["lon"])
    lat_dist = (lats - new_point[0]) * 111.37
    lon_dist = (lons - new_point[1]) * np.cos(new_point[0] * np.pi / 180) * 111.37
    return df[np.sqrt(lon_dist ** 2 + lat_dist ** 2) > radius]

def calculate_distance_for_point(point, houses):
    """
    calculate distances betwee point and all houses
    """
    lats = np.array(houses["lat"])
    lons = np.array(houses["lon"])
    lat_dist = (lats - point['lat']) * 111.37
    lon_dist = (lons - point['lon']) * np.cos(point['lat'] * np.pi / 180) * 111.37
    return np.sqrt(lon_dist ** 2 + lat_dist ** 2)    


def make_coverage(df, request, proportions, house_reester):
    """
    Makes result coverage from preprocessed data
    """
    coverage = []
    print("____________________________________________________")
    print(df.columns)
    curr_data = df.copy().sort_values(by="indicator", ascending=False)
    # coverage until fixed percent
    if request["coverage"] > 0:
        coverage_left = request["coverage"]
        covered_houses = set()
        # house_reester = get_houses_reester()
        total_people = house_reester['population'].sum()
        # auto mode
        if request["places"]["auto"] or len(proportions) == 0:
            while (coverage_left > 0) and (len(curr_data) > 0):
                candidate = curr_data.iloc[0, :]
                coverage.append(dict(curr_data.iloc[0, :]))
                curr_data = remove_neighbours(
                    curr_data, (coverage[-1]["lat"], coverage[-1]["lon"])
                    )
                # postamat_left -= 1

                distances = calculate_distance_for_point(dict(candidate), house_reester)
                new_houses = set(house_reester.index[distances < RADIUS])
                dif_houses = new_houses - covered_houses
                covered_houses |= new_houses

                coverage_left -= house_reester.loc[list(new_houses)]['population'].sum() / total_people
        # use proportions
        else:
            curr_proportions = {k: int(v * coverage_left * total_people) for k, v in proportions.items()}
            while (coverage_left > 0) and (len(curr_data) > 0):
                candidate = curr_data.iloc[0, :]
                if (curr_proportions[candidate["type"]] > 0) or \
                    (sum(list(curr_proportions.values())) <= 0):
                    coverage.append(dict(candidate))
                    curr_data = remove_neighbours(
                        curr_data, (coverage[-1]["lat"], coverage[-1]["lon"])
                        )
                    
                    # postamat_left -= 1

                    distances = calculate_distance_for_point(dict(candidate), house_reester)
                    new_houses = set(house_reester.index[distances < RADIUS])
                    dif_houses = new_houses - covered_houses
                    covered_houses |= new_houses

                    coverage_left -= house_reester.loc[list(new_houses)]['population'].sum() / total_people
                    curr_proportions[candidate["type"]] -= house_reester.loc[list(new_houses)]['population'].sum()
                else:
                    curr_data = curr_data.iloc[1:,:]
    else:   # limited amount of postamates
        postamat_left = request["postamat_count"]
        # auto mode
        if request["places"]["auto"] or len(proportions) == 0:
            while (postamat_left > 0) and (len(curr_data) > 0):
                coverage.append(dict(curr_data.iloc[0, :]))
                curr_data = remove_neighbours(
                    curr_data, (coverage[-1]["lat"], coverage[-1]["lon"])
                    )
                postamat_left -= 1
        # use proportions
        else:
            curr_proportions = {k: int(v * postamat_left) for k, v in proportions.items()}
            while (postamat_left > 0) and (len(curr_data) > 0):
                candidate = curr_data.iloc[0, :]
                if (curr_proportions[candidate["type"]] > 0) or \
                    (sum(list(curr_proportions.values())) <= 0):
                    coverage.append(dict(candidate))
                    curr_data = remove_neighbours(
                        curr_data, (coverage[-1]["lat"], coverage[-1]["lon"])
                        )
                    curr_proportions[candidate["type"]] -= 1
                    postamat_left -= 1
                else:
                    curr_data = curr_data.iloc[1:,:]

    res = pd.DataFrame(coverage)
    placements = []
    for _, row in res.iterrows():
        placements.append({
            "area": row["area"],
            "district": row["district"],
            "radius": 0 if row["type"] != "house" else 0.4,
            "coordinates": str(row["lat"]) + "," + str(row["lon"]),
            "address_string": row["address"]
        })
    res["placement"] = placements
    res.drop(["area", "district", "lat", "lon", "address",
       "passenger_flow", "dist_to_center", "station_cnt", "pvz_cnt"], axis=1, inplace=True)
    res["id"] = np.arange(len(res))
    res["indicator"] = np.around(res["indicator"], 3)
    return res.to_json(force_ascii=False, orient="records")


def make_result(request):
    """
    Coverage creation according to user's settings.
    """
    data = get_df(request["model_keyword"])
    district_by_area = preprocess_placement_filters(request["areas"], request["districts"])
    filtered_data = filter_by_placement(data, district_by_area)
    proportions = get_proportions(request["places"])
    filtered_data = filter_by_places(filtered_data, proportions)
    house_reester = get_houses_reester(district_by_area)
    return make_coverage(filtered_data, request, proportions, house_reester)
