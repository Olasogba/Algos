'''
    Generate all the strings of length n drawn from 0 ... k - 1

    k-ary (1ks) as opposed to binary (2)
'''

def rangeToList(k): 
    result = [] 
    for i in range(0,k): 
        result.append(str(i)) 
    return result

def baseKStrings(n,k): 
    if n == 0: return n 
    if n == 1: return rangeToList(k) 
    return [digit+bitstring for digit in baseKStrings(1 ,k) for bitstring in baseKStrings(n-1,k)] 


def alternative(n, k):
    if n == 0: return n 
    if n == 1: return rangeToList(k) 
    bits = alternative(1,k)
    result = []
    for i, v in enumerate(bits):
        for i, u in enumerate(alternative(n-1, k)):
            result.append(v+u)
    return result



print(alternative(4,6))