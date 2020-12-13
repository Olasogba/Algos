'''
You are given two integer arrays nums1 and nums2 sorted in ascending order and
an integer k
Define a pair (u, v) which consists of one element from the first array and one 
element  from the second array

Find the k pairs (u1,v1), (u2,v2)...(uk,vk) with the smallest sums.

Example 1
Given nums1 = [1,7,11], nums2 = [2,4,6], k=3
Return [1,2][1,4],[1,6]

The first 3 pairs are returned from the sequence:
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]


Example 2
Given nums = [1,1,2], nums2 = [1,2,3], k=2

Return [1,1],[1,1]

The first 2 pairs are returned from the sequence:
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Exampe 3
Given nums1 = [1,2], nums2 = [3], k=3
Return [1,3],[2,3]

All possible pairs are returnd from the sequence:
[1,3],[2,3]
'''

import heapq

def smallest_sum_pair_on2logn(nums1: list, nums2: list, k: int):
   return


def smallest_sum_pair_on2logk(nums1: list, nums2: list, k: int):
    return None



print(smallest_sum_pair_on2logk([1,7,11],[2,4,6],3)) # [1, 2], [1, 4], [1, 6]
print(smallest_sum_pair_on2logk([1,1,2],[1,2,3],2)) # [1,1],[1,1]
print(smallest_sum_pair_on2logk([1,2],[3],3)) # [1,3],[2,3]