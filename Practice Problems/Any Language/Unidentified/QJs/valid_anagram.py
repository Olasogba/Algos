def valid_anagram(s1: str, s2: str):
    # simply create two frequency counters and compare their values

    map1 = {}
    map2 = {}

    for i in s1:
        if map1.get(i) != None:
            map1[i] +=1
        else:
            map1[i] = 1

    for i in s2:
        if map2.get(i) != None:
            map2[i] +=1
        else:
            map2[i] = 1
    
    for i, v in enumerate(map1):
        if map1.get(v) != map2.get(v):
            return False

    return True


print(valid_anagram('anagram', 'nagaram')) # true
print(valid_anagram('rat', 'car')) # false