'''
Given two strings s and t, write a function to determine if t is an anagram of s.

For example
s = "anagram", t = "nagaram", return true
s= "rat", t = "car", return false

Note: 
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution
to such case?
'''


def valid_anagram(s1: str, s2: str):
    # simply create two frequency counters and compare their values

    map1 = {}
    map2 = {}

    for i in s1:
        if map1.get(i) != None:
            map1[i] +=1
        else:
            map1[i] = 1

    for i in s2:
        if map2.get(i) != None:
            map2[i] +=1
        else:
            map2[i] = 1
    
    for i, v in enumerate(map1):
        if map1.get(v) != map2.get(v):
            return False

    return True

def valid_anagram_n2(s1: str, s2: str):
    # create a matched array where all elements are intially false 
    # the size of the first string
    # loop over the second string
    # for each value, look for the value in the first string and set the index as
    # matched
    # confirm there are not unmatched els in matched

    if len(s1) != len(s2): return False
    if len(s1)==0 & len(s2)==0: return True

    matched = [False for i in s1]
    for i, v in enumerate(s1):
        for j, u in enumerate(s2):
            if (u==v) & (matched[i]==False): # ensuring we only match values once
                matched[i] = True
                break
    return False not in matched

def valid_anagram_nlogn(s1: str, s2: str):
    return ''.join(sorted(s1)) == ''.join(sorted(s2))


print(valid_anagram_nlogn('anagram', 'nagaram')) # true
print(valid_anagram_nlogn('rate', 'car')) # false
print(valid_anagram_n2('', 'e')) # false