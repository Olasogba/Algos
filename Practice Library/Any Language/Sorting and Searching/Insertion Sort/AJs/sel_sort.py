def sort(list):
    i = 1
    while i < len(list):
        j=i-1
        current = list[i]
        while (j>=0) & (list[j]>current):
            list[j+1]=list[j]
            j-=1
        list[j+1]=current
        i+=1
    print(list)
    return list


def my_sort(list):
    i = 1
    while i<len(list):
        if list[i-1]>list[i]:
            j=0
            while j < i:
                if list[j] > list[i]:
                    swap(list, i, j)
                j+=1
        i+=1
    return list


def swap(list, i, j):
    list[i], list[j] = list[j], list[i]


print(my_sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0]))
sort([101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0])