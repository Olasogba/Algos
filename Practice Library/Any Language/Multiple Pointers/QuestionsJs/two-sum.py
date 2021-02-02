# Given an array of integers, return the indices such that they add up to a
# specific target. YOu may assume that each input would have exactly one
# solution, and you may not use the same element twice

def two_sum(array: list, target: int):
    # save the els
    # sort
    # compare the pointers
    # return
    tup_list = []
    for i, v in enumerate(array):
        tup_list.append((v, i))
    
    tup_list.sort()

    left = 0
    right = len(array)-1
    while(left<right):
        sum = tup_list[left][0] + tup_list[right][0]
        if(sum==target): return [tup_list[left][1], tup_list[right][1]]
        elif sum>target: right-=1
        else: left+=1
    
    return None

print(two_sum([2,7,11,15],9)) # 0,1
print(two_sum([2,11,15,7,4,3,5,6,4,3,3],7)) # 0,6
