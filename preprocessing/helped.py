# with open('6.txt', 'r') as f1, open('7.txt', 'w') as f2:
#     f2.writelines(line for line in f1 if line.strip())


crimefile = open('1.txt', 'r')
addresses = [line.strip() for line in crimefile.readlines()]
crimefile.close()

crimefile = open('2.txt', 'r')
addresses1 = [line.strip() for line in crimefile.readlines()]
crimefile.close()

crimefile = open('3.txt', 'r')
geopositions1 = [line.strip() for line in crimefile.readlines()]
crimefile.close()

crimefile = open('4.txt', 'r')
addresses2 = [line.strip() for line in crimefile.readlines()]
crimefile.close()

crimefile = open('5.txt', 'r')
geopositions2 = [line.strip() for line in crimefile.readlines()]
crimefile.close()

DICT = {}

for i in range(len(addresses)):
    DICT[addresses[i]] = 'none'

for i in range(len(addresses1)):
    DICT[addresses1[i]] = geopositions1[i]

for i in range(len(addresses2)):
    DICT[addresses2[i]] = geopositions2[i]

crimefile = open('6.txt', 'w')

for i in range(len(addresses)):
     print(addresses[i])
     print(DICT[addresses[i]])
     crimefile.write(f'{DICT[addresses[i]]}\n')