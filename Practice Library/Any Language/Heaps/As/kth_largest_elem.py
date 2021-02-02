'''
Find the kth largets element in an unsorted array. Note that it is the kth largest
element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k=2, return 5

Note
You may assume k is always valid, 1 <= k <= array's length
'''
import heapq


def kth_largest_nlogn(ints: list, k: int):
    # create a set of the ints
    # sort it
    # loop from the bottom
    ls = list(sorted(list(set(ints))))
    return ls[len(ints)-k]


def kth_largest_nlogk(ints: list, k: int):
    # find the k largest numbers
    # return the smallest of them
    # by
    # loop over the ints
    # add the first k elems to a heap
    # for the next elems remove the root and add them if they're greater
    # return the smallest value (root) of the heap
    
    queue = ints[:k]
    heapq.heapify(queue)
    for i in ints[3:]:
        root = queue[0]
        if i > root:
            heapq.heappop(queue)
            queue.append(i)
            heapq.heapify(queue)
    return queue[0]


print(kth_largest_nlogk([3,2,1,5,6,4], 2)) # 5
print(kth_largest_nlogk([3,2,1,5,6,4], 3)) # 4
print(kth_largest_nlogk([3,2,1,5,6,4], 1)) # 6