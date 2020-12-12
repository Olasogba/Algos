'''
Given an array of integers and an integer k, find out whther there are two distinct
indeces i and j in the array such that nums[i]=nums[j] and the absolute difference
between i and j is at most k

([1,2,3,1,5], 3) => True
([1,2,3,4,1], 3) => False
'''

# mine
def contains(ints: list, k: int):
    return None



def contains_n2(ints: list, k:int):
    return None

def contains_kn(ints: list, k:int):
    return None


print(contains_kn([1,2,3,1,5], 3)) # true: 0, 3
print(contains_kn([1,2,3,4,1], 3)) # false
print(contains([1,0,1,1],1)) # true
print(contains([0,1,2,3,4,0,0,7,8,9,10,11,12,0], 1)) # true