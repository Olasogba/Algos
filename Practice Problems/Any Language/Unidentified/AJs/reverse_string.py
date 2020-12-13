'''
Given a string of words, reverse all the words

start = "This is the best"
finish = "best the is This"
'''

def reverse_words(string: str):
    # split the string
    # loop from the bottom
    # print the joined string
    s2 = string.split(' ')
    # print(s2)

    i=len(s2)-1
    x = ''
    # return print(" ".join((reversed(s2))))
    while(i>=0):
        x+=s2[i]+' ' if i != 0 else s2[i]
        i-=1
    # print(f"\"{x}\"")
    print(x)
    return x;


reverse_words("This is the best") #"best the is This"
reverse_words("Hello I am Michael")

# 1:57:43