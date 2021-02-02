'''
You're now a baseball game point recorder.

Given a list of strings, each string can be one of the following types:
1. 'Integer' (one round's score): Directly represents the number of points
   you get in this round
2. '+' (one round's score): Represents that the points you get in this round
   are the sum of the last two 'valid' round's points
3. 'D' (one round's score): Represents that the points you get in this round
   are the doubled data of the last valid round's points.
4. 'C' (an operation, which isn't a round's score): Represents the last 
   'valid' round's points you get were invalid and should be removed.

Each round's operation is permanent and could have an impact on the round
before and the round after.

You need to return the sum of the points you could get in all the rounds.
'''

def record_with_stack(strings: list):
   # adding the interpreted values to the stack and summing cummulatively
   stack = []
   for i, v in enumerate(strings):
      if v in ['C', 'D', '+']:
         if v == 'C':
            stack.pop()
         if v == 'D':
            head = stack[len(stack)-1]
            stack.append(int(head)*2)
         if v == '+':
            head = int(stack[len(stack)-1])
            nxt = int(stack[len(stack)-2])
            stack.append(head+nxt)
      else:
         stack.append(v)
   sum = 0
   for i in stack:
      sum+=int(i)
   return sum;


def record_n2(strings: list):
   # create an array to mark canceled values
   # loop
   # check for c, then d, then '+'
   canceled = list(map( lambda x : False, strings));
   print(canceled)
   i=0
   while i<len(strings):
      if strings[i]=='C':
         j=i-1
         found = False
         while j>=0 and found==False:
            if canceled[j]==False:
               canceled[j]=True
               found = True               
            j-=1
         canceled[i]=True
      if strings[i]=='D':
         j=i-1
         while j>=0 and canceled[j]==True:
            j-=1
         strings[i]=2*int(strings[j])
      if strings[i]=='+':
         j=i-1
         added=0
         total = 0
         while j>=0 and added <2:
            if canceled[j]==False:
               total+=int(strings[j])
               added+=1
            j-=1
         strings[i]=total
      
      i+=1
   sum = 0
   print(strings)
   print(canceled)
   for i, v in enumerate(strings):
      if canceled[i]==False:
         sum+=int(v)
   return sum

print(record_n2(['5','2','C','D', '+'])) # 30
# print(record_n2(['5','-2','4','C','D','9','+','+'])) # 27