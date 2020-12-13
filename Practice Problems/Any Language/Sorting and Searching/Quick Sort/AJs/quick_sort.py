def sort(array, left=None, right=None):
    if left == None: left = 0
    if right == None: right = len(array)-1

    if (left < right):
        swapIdx = pivot(array, left, right)
        sort(array, left, swapIdx-1)
        sort(array, swapIdx+1, right)
    
    return array

def pivot(array, start=None, end=None):
    if start == None: start = 0
    if end == None: end = len(array)-1
    pivot = array[start]
    swapIdx = start
    i = start+1
    while i <= end:
        if array[i] < pivot:
            swapIdx+=1
            swap(array, i, swapIdx)
        i+=1
    swap(array, start, swapIdx)
    # print(array)
    return swapIdx

def swap(lst, i, j):
    lst[i], lst[j] = lst[j], lst[i]


print(sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))

    