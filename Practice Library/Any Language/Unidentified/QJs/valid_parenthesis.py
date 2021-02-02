'''
Given a string containing just the characters '(), ')', '{', '}', '[', and ']', 
determine if the input string is valid. The brackets must close in the correct 
order, "()" and "()[]{}" are all valid but "(])" and "([)]" are not. 

print(valid_parenthesis_n2('()')) # true
print(valid_parenthesis_n2('()[]{}')) # true
print(valid_parenthesis_n2('(]')) # false
print(valid_parenthesis_n2('([)]')) # false
print(valid_parenthesis_n2('((()))')) # true
'''


def valid_parenthesis(string: str):
    return


print(valid_parenthesis('()')) # true
print(valid_parenthesis('()[]{}')) # true
print(valid_parenthesis('(]')) # false
print(valid_parenthesis('([)]')) # false
print(valid_parenthesis('((()))')) # true
print(valid_parenthesis('((())))')) # false