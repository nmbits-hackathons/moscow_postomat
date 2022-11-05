import numpy as np 
import pandas as pd
import json
from administrative_divisions import adm_areas, adm_districts
from model_datasets import model_results


def make_result(df):
    """
    Stub for returning non-null coverage
    """
    a = np.random.choice(200, size=50, replace=False)
    res = df.iloc[a, :].sort_values(by="Mark", ascending=False)
    return res.to_json(force_ascii=False)


def get_df(model_name):
    """
    model_name: model type chosen by user

    return: dataframe with marks from a corresponding model
    """
    return pd.read_csv(model_results[model_name]).iloc[:, 1:]


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
    print(district_by_area)
    return district_by_area


def filter_by_placement(df, district_by_area):
    """
    df: dataframe with marks from some model
    return: dataframe with zones only from district_by_area
    """
    filtered_df = pd.DataFrame()
    for k, v in district_by_area.items():
        area_df = df[df.AdmArea == adm_areas[k]]
        if len(v) != 0:
            district_df = area_df[area_df.District.apply(lambda x: x in v)]
            filtered_df = filtered_df.append(
                district_df, ignore_index=True)
        else:
            filtered_df = filtered_df.append(
                area_df, ignore_index=True)
    return filtered_df


def filter_by_places(df, district_by_area):
    """

    """
    pass


def make_coverage(request):
<<<<<<< HEAD
    """
    Coverage creation according to user's settings.
    """
    data = get_df(request["model_keyword"])
    district_by_area = preprocess_placement_filters(request["areas"], request["districts"])
    filtered_data = filter_by_placement(data, district_by_area)
    # if request["places"]["library"] > 0:
    #     return make_result()
    # else:
    #     return pd.DataFrame().to_json()
    return make_result(data)
=======
    '''
    '''
    if request['places']['library'] > 0:
        df = pd.read_csv('./datasets/math_model_result.csv')
        df = df.iloc[:, 1:]
        a = np.random.choice(200, size=50, replace=False)
        res = df.iloc[a, :].sort_values(by='Mark', ascending=False)
        return res.to_json(orient='records')
    else:
        return pd.DataFrame().to_json()
>>>>>>> 68eb41285fbca5e761eac077c38146c365553236
