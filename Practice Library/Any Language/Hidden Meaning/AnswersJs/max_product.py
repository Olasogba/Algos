'''
Given an integer array, find the numbers whose product is maximum and output the
maximum product.

Example
Input: [1,2,3]
Output: 6

Example 2:
Input: [1,2,3,4]
Output: 24
'''


def max_product(array: list): # O(nlogn) because of the sort
    # sort the numbers
    # get the multiple of the first two and the last one elment
    # get the multiple of the last three elements
    # answer is the max

    sortd = sorted(array)
    v1 = sortd[0]*sortd[1]*sortd[len(array)-1]
    v2 = sortd[len(array)-1]*sortd[len(array)-2]*sortd[len(array)-3]

    ans = max(v1,v2)
    print(ans)
    return ans

max_product([1,2,3]) # 6
max_product([1,2,3,4]) # 24
max_product([-8, -20, 1,2,3,4]) # 640

def max_product_O_n(array: list):
    # loop through the array
    # record the two smallest nos
    # and the three largest nos

    smallest = 0
    second_smallest = 0

    largest = 0
    second_largest = 0
    third_largest = 0

    for i, v in enumerate(array):
        if v > largest:
            third_largest = second_largest
            second_largest = largest
            largest = v
        if v < smallest:
            second_smallest = smallest
            smallest = v
    
    ans = max(smallest*second_smallest*largest, largest*second_largest*third_largest)
    print(ans)
    return ans

max_product_O_n([1,2,3]) # 6
max_product_O_n([1,2,3,4]) # 24
max_product_O_n([-8, -20, 1,2,3,4]) # 640