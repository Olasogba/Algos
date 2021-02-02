def sort(arr: list):
    start=0
    i=start+1
    while i<=len(arr)-1:
        j=i-1
        current = arr[i]
        while(j>=0) and (arr[j]>current):
            arr[j+1]=arr[j]
            j-=1
        arr[j+1]=current
        i+=1

    return arr

print(sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))
