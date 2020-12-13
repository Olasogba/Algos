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
    # cover the edge cases
    # add the open items to the stack
    # balance them up

    if len(string)==0: return True
    if len(string)==1: return False

    stack = []

    if string[0] in [']', '}', ')']:
        return False
    else: stack.append(string[0])

    i=1;
    while i<len(string):
        if string[i] in ['{', '[', '(']:
            stack.append(string[i])
        else:
            if len(stack)==0: return False;
            head = stack[len(stack)-1]
            current = string[i]
            if (head=='(' and current==')') or (head=='[' and current==']') or (head=='{' and current=='}'):
                stack.pop()
            else:
                return False
        i+=1
    return len(stack)==0


print(valid_parenthesis('()')) # true
print(valid_parenthesis('()[]{}')) # true
print(valid_parenthesis('(]')) # false
print(valid_parenthesis('([)]')) # false
print(valid_parenthesis('((()))')) # true
print(valid_parenthesis('((())))')) # false