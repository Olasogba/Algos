'''
https://www.geeksforgeeks.org/amazon-interview-experience-sde-2-10/

Given a list of pairs of characters “Pairs Array” and a list of double 
numbers “Weights Array” resolve the weights of query array.

Sample Input :
Pairs Array : {{a,b}, {b,c}, {c,d}, …}
Weights Array {5.0, 7.0, 2.0,…}
Query Array {{a,c}}

Explanation : each object in Pairs array is associated with the equivalent 
element in the weights array as follows.

a/b = 5.0, b/c = 7.0, c/d = 2.0.

Query = {a,c} = a/c = a/b * b/c = 5.0 * 7.0 = 35.0

So the answer is 35.0.

Do Note that the Weight Array can have Zeroes.
'''