'''
Given two strings, check to see if they are anagrams. An anagram is when the two 
strings can be written using the exact same letters (so you can just rearrange the 
letters to get a different phrase or word)
'''

def anagram(s1: str, s2: str):
    s1=s1.replace(' ', '')
    s2=s2.replace(' ', '')
    return sorted(s1)==sorted(s2)


print(anagram('public relations', 'crap built on lies'))
print(anagram('dog', 'g ode'))
print(anagram('clint eastwood', 'old west action'))
