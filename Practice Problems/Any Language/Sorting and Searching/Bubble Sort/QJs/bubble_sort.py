def bubble_sort(arr: list):
    # start from right
    # then left
    # compare
    # swap
    i = len(arr)-1
    while(i>=0):
        for j in range(i):
            if(arr[j]>arr[j+1]):
                swap(arr, j, j+1)
        i-=1
    return arr;

def swap(arr, i, j):
    arr[i], arr[j]=arr[j], arr[i]


print(bubble_sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))