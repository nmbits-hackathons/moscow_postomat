import json


#загрузить из json
with open('zero_data.json.json', 'r', encoding='utf-8') as fh: #открываем файл на чтение
    ADDRESSES = json.load(fh) #загружаем из файла данные в словарь data



crimefile = open('adresses.txt', 'r')
str_addresses = [line for line in crimefile.readlines()]

for i in range(len(str_addresses)):
    ADDRESSES[str_addresses[i]] = "none"



def worker(worker_number, begin_index: int, end_index: int):


    newpath = f'{worker_number}'
    if not os.path.exists(newpath):
        os.makedirs(newpath)


    for index in range(begin_index, end_index):
        if os.path.exists(str(index)):

        address = addresses[index]
        address.replace(" ", "%20")
        address.replace(".", ",")
        url = f"http://api.positionstack.com/v1/forward?access_key={API_KEY}&query={address}"
        payload = {}
        headers = {}
        response = requests.request("GET", url, headers=headers, data=payload)
        data = response.json()
        print(data)
        geoposition = f'{data["data"][0]["latitude"]},{data["data"][0]["longitude"]}'


threads = [Thread(target=worker, args=(i, interval * i, interval * (i + 1) - 1)) for i in range(count_of_threads)]

print(f"запуск")

for t in threads:
    t.start()
