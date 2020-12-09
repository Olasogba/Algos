'''
Given an array of integers and an integer k, find out whther there are two distinct
indeces i and j in the array such that nums[i]=nums[j] and the absolute difference
between i and j is at most k

([1,2,3,1,5], 3) => True
([1,2,3,4,1], 3) => False
'''

# mine
def contains(ints: list, k: int):
    # find a way to record the equal pairs and their indexes
    # measure their differences and compare with k
    # if you find at least one, return true

    # store a list of the indexes in which an item occurs
    # loop over the list comparing the indexes
    # return true when a comparison resolves

    map = {}
    for i, v in enumerate(ints):
        if(map.get(v) != None):
            map[v].append(i)
        else: map[v]=[i]


    for i in map.keys():
        val = map.get(i)
        length = len(val)
        if length > 1:
            idx1 = val[length-1]
            idx2 = val[length-2]
            v1 = ints[idx1]
            v2 = ints[idx2]
            if v1==v2:
                if abs(idx1-idx2)<=k: return True
            
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

def contains_kn(ints: list, k:int):
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
print(contains([1,0,1,1],1))
print(contains([0,1,2,3,4,0,0,7,8,9,10,11,12,0], 1))