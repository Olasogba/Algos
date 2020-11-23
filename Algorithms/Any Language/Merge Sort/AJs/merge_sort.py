# two functions:
# merge sorted arrays
# recursively divide list into two and merge

def merge(list1, list2):
    # create a counter that loops over list1
    # compare that index between list1 and list2
    results = []
    i = 0
    j = 0
    while (i < len(list1)) & (j < len(list2)):
        if(list1[i] < list2[j]):
            results.append(list1[i])
            i+=1
        elif(list2[j] <= list1[i]):
            results.append(list2[j])
            j+=1
    
    while i < len(list1):
        results.append(list1[i])
        i+=1
    
    while j < len(list2):
        results.append(list2[j])
        j+=1
    
    return results
    
def mergeSort(a_list):
    if len(a_list) <= 1: return a_list

    half = len(a_list)//2
    
    left = mergeSort(a_list[:half])
    right = mergeSort(a_list[half:])

    return merge(left, right)
    


# merge([1,2,3],[3,6,7])
print(mergeSort([1,4,3,5,32,6,7,6,8,7,66,5,4,3,4,6]))
print(mergeSort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))