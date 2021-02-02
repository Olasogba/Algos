'''
    Given an array integer, output all the unique pairs that sum up to a specific 
    value k.

    So the input:
    pair_sum([1,3,2,2], 4) would return 2 pairs:
    (1,3)
    (2,2)

'''

from typing import List, Tuple


def pair_sum(array: List, sum: int):
    # sort the array
    # start a double pointer
    # add up the two values
    # compare and if less
    # increase left
    # else if greater decrease right
    # else increment count to return

    if len(array)<2: return print('Too small')

    array = sorted(array)
    left = 0
    right = len(array)-1
    count_to_return = 0
    arr_to_return = []

    while(left<right):
        d_sum = array[left]+array[right]
        if d_sum < sum:
            left+=1
        elif d_sum > sum:
            right-=1
        else:
            count_to_return+=1
            arr_to_return.append(f'({array[left]}, {array[right]})')
            right-=1
    return arr_to_return;


print(pair_sum([1,3,2,2],4))
print(pair_sum([-4,-3,-2,-1,0,1,2,5], 3))
print()

def pair_sum2(array: List, sum: int):
    # save all the numbers in a set
    # iterate over the array
    # get the required target for each item
    # if the target exists in the set of saved numbers
    # means we found a match
    # else we add the number
    if(len(array)<2): return print('Too small!')

    seen = set()
    output = set()

    for n in array:
        # get the target we seek
        target = sum - n
        if target not in seen:
            seen.add(n)
        else:
            output.add((target, n))
    
    
    x = map(str, list(output))
    print(list(x))



pair_sum2([1,3,2,2],4)
pair_sum2([-4,-3,-2,-1,0,1,2,5], 3)
