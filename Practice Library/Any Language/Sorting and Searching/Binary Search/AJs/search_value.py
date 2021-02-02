'''
/**
 * Given a sorted array, and a value, return the index of that value in
 * the array if you find it, else return -1
 */
'''

def search(arr: list, val: int):
    # store a map of the values and their index
    # divide the arr
    # if > i, use i -> len
    # else if < i, use 0 -> i
    # else return the index of arr[i] 

    map = {}
    for i, v in enumerate(arr):
        map[v]=i # can use [] instead here
    i=0
    j=len(arr)-1
    count=0
    while(i<=j) and (count<100):
        mid = (i+j)//2
        if arr[mid]>val:
            j=mid-1
        elif arr[mid]<val:
            i=mid+1
        else: return mid
        count+=1



print(search([1,2,3,4,5,6,7,8,9,10,11,17], 1)) # 0
print(search([2,5,6,9,13,15,28], 15)) # 5