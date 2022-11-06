crimefile = open('data.txt', 'r')
addresses = [line.strip() for line in crimefile.readlines()]


for address in addresses:
    if not address.__contains__("("):
        print(address)
