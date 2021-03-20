'''
Generate all the binary strings with n bits. Assume A[O .. n - 1] is an array of size n.

i.e generate all possible 0/1 permutations of n
binary string = 0/1 string
1 bit == 1 character


Algorithm
We simply add the different bits (of 1 to the given base - in this case, binary - 0, 1) to every level of permutation
'''

def appendAtBeginningFront(x, L): 
    return [x + element for element in L]

def bitStrings(n): 
    if n == 0: return []     
    if n == 1: return ["0", "1"] 
    else: return (appendAtBeginningFront("0", bitStrings(n-1)) + appendAtBeginningFront("1", bitStrings(n-1))) 


def alternative(n):
    if n == 0: return []     
    if n == 1: return ["0", "1", '-1'] 
    return [digit + bitString for digit in alternative(1) for bitString in alternative(n-1)] 


print(alternative(2))