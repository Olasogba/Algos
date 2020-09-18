'''
Given an array arr[] of N numbers. We can merge two adjacent numbers into 
one and the cost of merging the two numbers is equal to the sum of the two 
values. The task is to find the total minimum cost of merging all the 
numbers.

Examples:
Input: arr[] = { 6, 4, 4, 6 } 
Output: 40 
Explanation: 
Following is the optimal way of merging numbers to get the total minimum 
cost of merging of numbers: 
1. Merge (6, 4), then array becomes, arr[] = {10, 4, 6} and cost = 10 
2. Merge (4, 6), then array becomes, arr[] = {10, 10} and cost = 10 
3. Merge (10, 10), then array becomes, arr[] = {20} and cost = 20 
Hence the total cost is 10 + 10 + 20 = 40.

Input: arr[] = { 3, 2, 4, 1 } 
Output: 20 
Explanation: 
Following is the optimal way of merging numbers to get the total minimum 
cost of merging of numbers: 
1. Merge (3, 2), then array becomes, arr[] = {5, 4, 1} and cost = 5 
2. Merge (4, 1), then array becomes, arr[] = {5, 5} and cost = 5 
3. Merge (5, 5), then array becomes, arr[] = {10} and cost = 10 
Hence the total cost is 5 + 5 + 10 = 20.
'''