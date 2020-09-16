def pivot(lst):
    # pick the start as the pivot
    # loop through the list and if you find an element less than the pivot
    # increment the swap index and swap the currently iterated el with that index
    # at the end of the loop, swap the pivot index with the swap index
    start = 0
    end = len(lst)-1
    pivot = lst[start]
    i = start + 1
    toSwap = start
    while i < end:
        if lst[i] < pivot:
            toSwap += 1
            swap(lst, toSwap, i)
        i+=1
    swap(lst, start, toSwap)
    print(lst)
    return toSwap

def swap(lst, i, j):
    lst[i], lst[j] = lst[j], lst[i]

pivot([5,2,1,4,3,7,6,8])

    
