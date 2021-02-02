def ins_sort(arr: list):
    i = 1
    while i<len(arr):
        j=i-1
        currentVal = arr[i]
        while (j>=0) and (arr[j]>currentVal):
            arr[j+1]=arr[j]
            j-=1
        arr[j+1]=currentVal
        i+=1
    return arr

print(ins_sort([1,3,4,2,4,5,6,4,1,33])) 