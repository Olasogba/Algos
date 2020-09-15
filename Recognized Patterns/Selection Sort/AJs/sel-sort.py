def swap(list, i, j):
    list[i], list[j] = list[j], list[i]

def sort(list):
    # collates the lowest index with a second loop
    for i in range(len(list)):
        lowest = i
        j = i+1
        while j<len(list):
            if list[lowest] > list[j]:
                lowest = j
            j+=1
        if lowest != i:
            swap(list, i, lowest)
    return list

print(sort([1,3,2,4,3,5,6,4,7]))
print(sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))

