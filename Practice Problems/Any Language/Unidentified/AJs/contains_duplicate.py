'''
Given an array of integers and an integer k, find out whther there are two distinct
indeces i and j in the array such that nums[i]=nums[j] and the absolute difference
between i and j is at most k

([1,2,3,1,5], 3) => True
([1,2,3,4,1], 3) => False
'''

def contains_hash_table(ints: list, k: int):
    map = {} # map the number to its index

    for i, v in enumerate(ints):
        if map.get(v) != None:
            # we have found it before
            if i-map.get(v)==k: return True
            else: map[v]=i
        else:
            map[v] = i

    return False



def contains_n2(ints: list, k:int):
    for i, v in enumerate(ints):
        j = i+1
        while j<len(ints):
            v1 = ints[i]
            v2 = ints[j]
            if v1==v2:
                if abs(j-i) <= k: return True
            j+=1
    return False

def contains_kn(ints: list, k:int): # still n2 though
    # start a loop on i,
    # loop backwards with j while j >=0 && j-i<=k
    # compare the values of ints[i] and ints[j]
    # resolve
    for i in ints:
        j=i-1
        while j>0 and i-j<k:
            j-=1 
        if ints[i]==ints[j]:
            return True

    return False


print(contains_kn([1,2,3,1,5], 3)) # true: 0, 3
print(contains_kn([1,2,3,4,1], 3)) # false
print(contains_hash_table([0,1,2,3,4,0,0,7,8,9,10,11,12,0], 1)) # true