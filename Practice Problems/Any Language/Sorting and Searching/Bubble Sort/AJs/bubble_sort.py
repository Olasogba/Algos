def bubble_sort(list):
    i = len(list)-1
    while i > 0:
        for j in range(i):
            if list[j] > list[j+1]:
                swap(list, j, j+1)
                noSwaps = False
        i-=1
    return list;

def swap(list, i, j):
    list[i], list[j] = list[j], list[i]

print(bubble_sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))

