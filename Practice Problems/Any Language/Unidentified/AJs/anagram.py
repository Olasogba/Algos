'''
Given two strings, check to see if they are anagrams. An anagram is when the two 
strings can be written using the exact same letters (so you can just rearrange the 
letters to get a different phrase or word)
'''

def anagram(s1: str, s2: str):
    # set the letters to lowercase
    # remove the spaces
    # run the test fn
    s1 = s1.replace(" ", '').lower()
    s2 = s2.replace(' ', '').lower()
    if(len(s1) != len(s2)): return False;

    freq1 = {}
    freq2 = {}

    for i, v in enumerate(s1):
        val = freq1.get(v)
        freq2[v] = val+1 if val is not None else 1
    
    for i, v in enumerate(s2):
        val2 = freq2.get(v)
        freq2[v] = val2+1 if val2 is not None else 1
    
    for i, v in enumerate(freq1.keys()):
        if(freq1.get(v) != freq2.get(v)): return False;
    
    return True;


# print(anagram('public relations', 'crap built on lies'))
# print(anagram('dog', 'g ode'))
# print(anagram('clint eastwood', 'old west action'))


def anagram2(s1: str, s2: str):
    # strip the strings
    # sort them and compare
    s1 = s1.replace(' ', '').lower()
    s2 = s2.replace(' ', '').lower()

    return sorted(s1) == sorted(s2)

print(anagram2('public relations', 'crap built on lies'))
print(anagram2('dog', 'g ode'))
print(anagram2('clint eastwood', 'old west action'))