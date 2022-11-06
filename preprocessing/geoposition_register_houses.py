import os
import time
from threading import Thread

import pandas as pd
import requests
import csv

from sqlalchemy.sql.elements import and_

from database_adapter import create_session
from database import DataAddress, BaseAddress

from dadata import Dadata

token = "18aa6b629bd15297fca52132cb1768093320f1f3"
secret = "d084bfc04a8135159788d03ff8b88446f47940e8"
dadata = Dadata(token, secret)

API_KEY = "e904905a64bb127deb1ec0e420a342ba"

crimefile = open('1.txt', 'r')
addresses = [line for line in crimefile.readlines()]

SET = set()

for i in addresses:
    with create_session() as session:
        address_data = session.query(DataAddress).filter(
            and_(DataAddress.address_str == i, DataAddress.geoposition == 'none')).first()
        if address_data is not None:
            SET.add(i)


def worker():
    s = None
    while len(SET) != 0:
        for i in SET:
            s = i
            break

        SET.remove(s)

        try:
            address = s
            # address = address.replace(" ", "%20")
            # url = f"http://api.positionstack.com/v1/forward?access_key={API_KEY}&query={address}&limit=1"
            # print(url)
            # payload = {}
            # headers = {}
            # response = requests.request("GET", url, headers=headers, data=payload)
            # data = response.json()
            # print(data)
            # geoposition = f'{data["data"][0]["latitude"]},{data["data"][0]["longitude"]}'
            # print("пришел ответ от апи", geoposition)

            result = dadata.clean("address", address)
            geoposition = f"{result['geo_lat']},{result['geo_lon']}"

            with create_session() as session:
                data_address = session.query(DataAddress).filter(
                    and_(DataAddress.address_str == address, DataAddress.geoposition == 'none')).first()
                data_address.geoposition = geoposition
                session.commit()
                print(address, "добавлен")
        except Exception as e:
            print(s, "проблемы",e)


count_of_threads = 20

interval = int(len(addresses) / count_of_threads)
threads = [Thread(target=worker) for i in range(count_of_threads)]

print(f"запуск")

print(len(SET))
for t in threads:
    t.start()
