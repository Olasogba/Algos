'''
Given a string containing just the characters '(', ')', '{', '}', '[', and ']'
, determine if the input string is valid. The brackets must close in the
correct order, "()" and "()[]{}" are all valid but "(])" and "([)]" are not.
'''
import sys
sys.path.append("C:/Users/User/Desktop/Algorithm Mastery/Data Structures/Stacks and Queues/AJs")
import stack

def correct_order(string: str):
    # make a loop that runs the operation
    # and only makes the recursion if we hit our target
    # or reach the end of the string
    if len(string)==0: return True
    if (string.find('()') != -1):
        string = string.replace('()', "", 1)
        return correct_order(string)
    elif (string.find('{}') != -1):
        string = string.replace('{}', "", 1)
        return correct_order(string)
    elif (string.find('[]') != -1):
        string = string.replace('[]', "", 1)
        return correct_order(string)
    else:
        return False

def optimal(string: str):
    n = len(string)
    if n==0: return True
    if n==1: return False

    my_stack = stack.Stack()
    first = string[0]
    if (first==')') | (first=='}') | (first==']'):
        return False
    else:
        my_stack.push(first)
    
    for i, el in enumerate(string):
        if i==1: continue
        if (el==')') | (el=='}') | (el==']'):
            if my_stack.size==0:
                return False
            else:
                x= my_stack.get(0)
                if ((x=='{') & (string[i]=='}')) | ((x=='(')&(string[i]==')')) | ((x=='[') & (string[i]==']')):
                    my_stack.pop()
                else:
                    return False
        else:
            my_stack.push(string[i])
    print(my_stack)
    return my_stack.size == 0


# print(correct_order('()[]{}'))
# print(correct_order('(])'))
# print(correct_order('([)]'))

print(optimal('(())'))
