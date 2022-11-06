import json
from database_adapter import create_session
from database import DataAddress, BaseAddress

crimefile = open('1.txt', 'r')
str_addresses = [line for line in crimefile.readlines()]

for i in range(len(str_addresses)):
    try:
        with create_session() as session:
            address = DataAddress(**BaseAddress(address_str=str_addresses[i], geoposition='none').dict())
            data_address = session.add(address)
            print(address, "добавлен")
    except Exception as e:
        print(address, ",уже был добавлен", e)
