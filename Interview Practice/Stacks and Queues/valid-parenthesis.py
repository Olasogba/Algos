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
    if n==1 or n==0: return False

    my_stack=stack.Stack()
    if string[0]=='}' or string[0]==']' or string[0]==')':
        return False
    else:
        my_stack.push(string[0])
    
    for i, el in enumerate(string):
        if i==0: continue
        
        if el=='}' or el==']' or el==')':
            if my_stack.size==0: return False
            else:
                x = my_stack.get(0)
                if (x=='{' and string[i]=='}') | (x=='(' and string[i]==')')|(x=='[' and string[i]==']'):
                    my_stack.pop()
                else: return False
        else:
            my_stack.push(el)
    print(my_stack)
    return my_stack.size == 0



print(optimal('()[]{}'))
print(optimal('(])'))
print(optimal('([)]'))

print(optimal('(())'))
