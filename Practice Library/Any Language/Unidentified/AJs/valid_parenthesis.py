'''
Given a string containing just the characters '(), ')', '{', '}', '[', and ']', 
determine if the input string is valid. The brackets must close in the correct 
order, "()" and "()[]{}" are all valid but "(])" and "([)]" are not. 
'''


def valid_parenthesis_n2(string: str):
    # find the occurence of a double
    # replace the occurence
    # repeat the operation
    # for the operation return true if the string is empty
    if len(string)==0:
        return True
        
    if string.find('()') > -1:
        string = string.replace('()', '', 1)
        return valid_parenthesis_n2(string)
    elif string.find('[]') > -1:
        string = string.replace('[]','', 1)
        return valid_parenthesis_n2(string)
    elif string.find('{}') > -1:
        string = string.replace('{}','', -1)
        return valid_parenthesis_n2(string)
    
    return False

def valid_parenthesis_using_stack(string: str):
    # identify and cover base cases
    # arrange the opening brackets into the stack
    # in the same loop compare the top of the stack with the current char
    # if comparison fails return false
    # else pop the head
    # return stack is empty

    # case 1 -> string is empty
    if len(string)==1: return True
    if len(string)==1: return False

    stack = []
    if string[0] in [']','}',')']: return False
    else: stack.append(string[0])
    
    i=1
    while i<len(string):
        if string[i] in ['{', '[', '(']:
            stack.append(string[i])
        else:
            if len(stack)==0: return False
            head = stack[len(stack)-1]
            current = string[i]
            if (head=='(' and current==')') or (head=='[' and current==']') or (head=='{' and current=='}'):
                stack.pop()
            else:
                return False
        i+=1
    ans = len(stack)==0
    return ans

print(valid_parenthesis_using_stack('()')) # true
print(valid_parenthesis_using_stack('()[]{}')) # true
print(valid_parenthesis_using_stack('(]')) # false
print(valid_parenthesis_using_stack('([)]')) # false
print(valid_parenthesis_using_stack('((()))')) # true
print(valid_parenthesis_using_stack('[(((])))]')) # false