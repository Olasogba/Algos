import math

def merge_sort(arr: list):
    if(len(arr)<=1): return arr
    mid = math.floor(len(arr)//2)
    a=[]
    b=[]
    for i, v in enumerate(arr):
        a.append(v)
        if(i==mid-1): break
    j=mid
    while(j<len(arr)):
        b.append(arr[j])
        j+=1
    left = merge_sort(a)
    right = merge_sort(b)
    return merge(left,right)


def merge(a: list, b: list):
    i=0
    j=0
    result = []
    while(i<=len(a)) and (j<len(b)):
        if(a[i]<b[j]):
            result.append(a[i])
            i+=1
        else:
            result.append(b[j])
            j+=1
    
    while(i<len(a)):
        result.append(a[i])
        i+=1
    
    while(j<len(b)):
        result.append(b[j])
        j+=1
    
    return result



print(merge_sort([9,8,7,6,5,4]))