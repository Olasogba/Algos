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

print(more_optimal([-11,-22,3,4,5,6,7]))