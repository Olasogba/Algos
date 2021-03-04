'''
Given a string of words, reverse all the words

start = "This is the best"
finish = "best the is This"
'''

def reverse_words(string: str):
    sp = string.split(' ')
    i=len(sp)-1
    ans = ''
    while i>=0:
        ans += sp[i]+ ' ' if i>0 else sp[i]
        i-=1
    print(f"({ans})")



reverse_words("This is the best") #"best the is This"
reverse_words("Hello I am Michael")

# 1:57:43