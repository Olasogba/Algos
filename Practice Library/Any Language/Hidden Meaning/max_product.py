import math
'''
Given an integer array, find three numbers whose product is maximum and output
the maximum product

Example 1:
Input: [1,2,3]
Output: 6

Example 2:
Input: [1,2,3,4,5,6,7]
Output: 24
'''

def naive(array):
    res = 0
    for i, el in enumerate(array):
        j=i+1 
        while j<len(array):
            k=j+1
            while k<len(array):
                res = max(array[i]*array[j]*array[k], res)
                k+=1
            j+=1
    print(res)
    return res


def optimal(array):
    array.sort()
    n = len(array)
    res = max((array[0]*array[1]*array[n-1]), array[n-1]*array[n-2]*array[n-3])
    print(res)

def more_optimal(array: list):
    # find the three largest numbers
    # find the two smallest numbers
    # the answer is the max value between m1*m2*m3 and s1*s2*m1
    m1 = max(array)
    array.remove(m1)
    m2 = max(array)
    array.remove(m2)
    m3 = max(array)
    array.remove(m3)
    s1 = min(array)
    array.remove(s1)
    s2 = min(array)
    array.remove(s2)
    

    res1 = m1*m2*m3
    res2 = s1*s2*m1

    return max(res1, res2)

def most_optimal(array):
    max1 = 0
    max2 = 0
    max3 = 0
    min1 = 0
    min2 = 0
    for i, e in enumerate(array):
        if e > max1:
            max3 = max2
            max2 = max1
            max1 = e
        if e < min1:
            min2 = min1
            min1 = e
    
    print(max1,max2,max3,min1,min2)
    res1 = max1*max2*max3
    res2 = min1*min2*max1

    return max(res1, res2)

print(more_optimal([-11,-22,3,4,5,6,7]))
print(most_optimal([-11,-22,3,4,5,6,7]))
print()

print(more_optimal([-11,-22,3,4,5,6,7,9,11]))
print(most_optimal([-11,-22,3,4,5,6,7,9,11]))
