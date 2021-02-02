def bubble_sort(arr):
    end = len(arr)-1
    while(end>=0):
        start=0
        while(start<end):
            if(arr[start]>arr[start+1]):
                arr[start],arr[start+1]=arr[start+1],arr[start]
            start+=1
        end-=1
    return arr


print(bubble_sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))