'''
Given an array of integers, return the indices of the two numbers such that they
add up to a specific target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

Example:
two_sum([2,7,11,15], 9) => [0, 1]
two_sum([3,2,6], 6) => [1,2]
'''


def two_sum(array: list, target: int):

    sortd = sorted(array)
    left = 0
    right = len(array)-1

    # create a map to store the index of each value to access them later
    map = {}
    for i, v in enumerate(array):
        map[v] = i; 
    
    while(left<right):
        sum = sortd[left]+sortd[right]
        if sum < target:
            left+=1
        elif sum > target:
            right-=1
        else: 
            ans = [map[sortd[left]], map[sortd[right]]]
            print(ans)
            return ans
    print('Target sum cannot be constructed.')
    return None


two_sum([2,7,11,15], 9) # [0,1]
two_sum([3,2,4], 6) # [1,2]