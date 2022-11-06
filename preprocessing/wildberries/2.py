with open('test.txt', 'r') as f1, open('7.txt', 'w') as f2:
    f2.writelines(line for line in f1 if line.strip())