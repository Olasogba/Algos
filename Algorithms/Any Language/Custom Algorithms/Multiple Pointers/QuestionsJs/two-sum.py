# Given an array of integers, return the indices such that they add up to a
# specific target. YOu may assume that each input would have exactly one
# solution, and you may not use the same element twice

def two_sum(array, target):
    # register the indices of the elements in the array
    # sort the array
    # run the two pointers
    tuple_list = []
    for i, el in enumerate(array):
        tuple_list.append((el, i))
    
    tuple_list.sort()


    left = 0
    right = len(tuple_list)-1
    while left < right:
        total = tuple_list[left][0] + tuple_list[right][0]
        if total == target:
            return [tuple_list[left][1], tuple_list[right][1]]
        if total < target:
            left+=1
        if total > target:
            right-=1
    
    return None

print(two_sum([2,7,11,15],9))
print(two_sum([2,11,15,7,4,3,5,6,4,3,3],7))
