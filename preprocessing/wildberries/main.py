from dadata import Dadata

crimefile = open('data.txt', 'r')
addresses = [line.strip() for line in crimefile.readlines()]

new_addresses = []

token = "e9fdea4002be92ded3d6286fe7fc61a4a39c2378"
secret = "4911de22c1edc45d2c5bb786a6e96b134bfc0a23"
dadata = Dadata(token, secret)

for address in addresses:
    if not address.__contains__("Москва"):
        address += " Москва"
    new_addresses.append(address)

k = 0

geoposition_list = []
for address in new_addresses:
    try:
        result = dadata.clean("address", address)
        geoposition = f"{result['geo_lat']},{result['geo_lon']}"
        print(geoposition)
        k += 1
    except Exception as e:
        print(k)
        print(address, e)
        break
