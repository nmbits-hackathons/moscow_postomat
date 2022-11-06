import requests
import json
import pandas as pd


def get_printed_products_geoposition():
    url = "https://apidata.mos.ru/v1/datasets/2781/features?api_key=7cb6cc42caf681c688bc96e9a014e7df"

    payload = json.dumps(None)
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    data = response.json()
    print(data)
    with open('json-response/printed_products.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

    with open('json-response/printed_products.json', encoding='utf-8') as inputfile:
        df = pd.read_json(inputfile)

    df.to_csv('datasets/printed_products.csv', encoding='utf-8', index=False)


def get_non_stationary_trade_objects():
    url = "https://apidata.mos.ru/v1/datasets/619/features?api_key=7cb6cc42caf681c688bc96e9a014e7df"

    payload = json.dumps(None)
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    data = response.json()
    print(data)
    with open('json-response/non_stationary_trade_objects.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

    with open('json-response/non_stationary_trade_objects.json', encoding='utf-8') as inputfile:
        df = pd.read_json(inputfile)

    df.to_csv('datasets/non_stationary_trade_objects.csv', encoding='utf-8', index=False)


def get_libraries():
    url = "https://apidata.mos.ru/v1/datasets/526/features?api_key=7cb6cc42caf681c688bc96e9a014e7df"

    payload = json.dumps(None)
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    data = response.json()
    print(data)
    with open('json-response/libraries.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

    with open('json-response/libraries.json', encoding='utf-8') as inputfile:
        df = pd.read_json(inputfile)

    df.to_csv('datasets/libraries.csv', encoding='utf-8', index=False)


def get_houses_of_culture_and_clubs():
    url = "https://apidata.mos.ru/v1/datasets/493/features?api_key=7cb6cc42caf681c688bc96e9a014e7df"

    payload = json.dumps(None)
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    data = response.json()
    print(data)
    with open('json-response/houses_of_culture_and_clubs.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

    with open('json-response/houses_of_culture_and_clubs.json', encoding='utf-8') as inputfile:
        df = pd.read_json(inputfile)

    df.to_csv('datasets/houses_of_culture_and_clubs.csv', encoding='utf-8', index=False)


def get_sport_objects():
    url = "https://apidata.mos.ru/v1/datasets/629/features?api_key=7cb6cc42caf681c688bc96e9a014e7df"

    payload = json.dumps(None)
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    data = response.json()
    print(data)
    with open('json-response/sport_objects.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

    with open('json-response/sport_objects.json', encoding='utf-8') as inputfile:
        df = pd.read_json(inputfile)

    df.to_csv('datasets/sport_objects.csv', encoding='utf-8', index=False)


# get_printed_products_geoposition()
# get_non_stationary_trade_objects()
# get_libraries()
# get_houses_of_culture_and_clubs()
# get_sport_objects()


def get_dataset(data_set_name: str, dataset_id: int, version=None):
    url = f"https://apidata.mos.ru/v1/datasets/{dataset_id}/features?api_key=7cb6cc42caf681c688bc96e9a014e7df"
    if version is not None:
        url = f"https://apidata.mos.ru/v1/datasets/{dataset_id}/features?api_key=7cb6cc42caf681c688bc96e9a014e7df&versionNumber={version}"

    payload = json.dumps(None)
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    data = response.json()
    print(data)
    with open(f'json-response/{data_set_name}.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

    with open(f'json-response/{data_set_name}.json', encoding='utf-8') as inputfile:
        df = pd.read_json(inputfile)

    df.to_csv(f'datasets/{data_set_name}.csv', encoding='utf-8', index=False)


# get_dataset(data_set_name="passenger_traffic_at_moscow _metro_stations", dataset_id=62743)
# get_dataset(data_set_name="entrances_and_exits_of_lobbies_of_moscow_metro_stations", dataset_id=624)
# get_dataset(data_set_name="entrances_and_exits_of_moscow_central_diameter_stations", dataset_id=62207)
# get_dataset(data_set_name="information_about_stations_moscow_metro_lines", dataset_id=62741)


# get_dataset(data_set_name="multifunctional_centers", dataset_id=611)

get_dataset(data_set_name="address_register_moscow", dataset_id=60562, version="3.823")
