import json

import pandas as pd
import requests

upper_left_corner = [55.90109, 37.38664]
lower_left_corner = [55.5781, 37.9437]


def get_dataset(data_set_name: str, dataset_id: int, version=None, bbox=None):
    # url = f"https://apidata.mos.ru/v1/datasets/{dataset_id}/features?api_key=7cb6cc42caf681c688bc96e9a014e7df&versionNumber={version}&bbox={bbox}"
    url = f"https://apidata.mos.ru/v1/datasets/60562/features?api_key=7cb6cc42caf681c688bc96e9a014e7df&versionNumber={version}&bbox={bbox}"

    payload = json.dumps(None)
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.status_code)
    data = response.json()

    with open(f'json-response/{data_set_name}.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)

    with open(f'json-response/{data_set_name}.json', encoding='utf-8') as inputfile:
        df = pd.read_json(inputfile)

    df.to_csv(f'datasets/{data_set_name}.csv', encoding='utf-8', index=False)


for i in range(0, 10):
    for j in range(0, 10):
        left_corner_x = (lower_left_corner[0] - upper_left_corner[0]) / 100 * i + upper_left_corner[0]
        left_corner_y = (lower_left_corner[1] - upper_left_corner[1]) / 100 * j + upper_left_corner[1]

        right_corner_x = left_corner_x + (lower_left_corner[0] - upper_left_corner[0])
        right_corner_y = left_corner_y + (lower_left_corner[1] - upper_left_corner[1])

        box = f"{left_corner_x} {left_corner_y} {right_corner_x} {right_corner_y}"
        print(box)
        try:
            get_dataset(data_set_name=f"{i}-{j}-address_register_moscow", dataset_id=60562, version="3.823", bbox=box)
            print(f"квадрат {i},{j} успешно пройден")
        except Exception as e:
            print(i, j, "ошибка")
        print("________________")

# box = "55.5813299 37.5147638 55.258339899999996 38.0718238"
