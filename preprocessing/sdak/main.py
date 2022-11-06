file1 = open("data.txt", "r")

addresses = []

next = False
while True:
    line = file1.readline()
    if not line:
        break
    if line.__contains__("Постамат"):
        next = True
    else:
        next = False
        if next or line.__contains__("MSK"):
            ad = line.strip()[3:]
            while ord('0') <= ord(ad[0]) <= ord('9'):
                ad = ad[1:]
            addresses.append(ad)

for adress in addresses:
    print(adress)
