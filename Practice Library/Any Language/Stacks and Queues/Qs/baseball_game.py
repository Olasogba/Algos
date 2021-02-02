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

def record_n2(arr: list):
   # track the validity of the items in the array
   canceled = list(map(lambda x : False, arr))
   # return print(canceled)
   sum = 0
   i = 0
   while i<len(arr):
      val = arr[i]
      if val == '+':
         # look for the last 2 and add thm up
         added = 0
         j = i-1
         total = 0
         while j>= 0 and (added < 2) :
            if (canceled[j] is False):
               total+=int(arr[j])
               added+=1
            j-=1
         arr[i]=total
      if val=='D':
         # look for the last value and double it
         j=i-1
         while j >=0 and canceled[j]==True:
            j-=1
         arr[i]=2*int(arr[j])
      
      if val=='C':
         # cancel the last valid val
         j=i-1
         while j>=0 and canceled[j]==True:
            j-=1
         canceled[j]=True
         canceled[i]=True
      i+=1
   print(arr)

   for i, v in enumerate(arr):
      if canceled[i] is False:
         sum+=int(v)
   print(sum) 
   return sum;


def record_with_stack(arr: list):
   # stack the values, measure before you stack
   stack = []
   sum = 0
   for i, v in enumerate(arr):
      if v in ['+', 'D', 'C']:
         if v == '+':
            head = stack[len(stack)-1]
            nxt = stack[len(stack)-2]
            stack.append((head)+(nxt))
         if v== 'D':
            head = stack[len(stack)-1]
            stack.append((head)*2)
         if v=='C':
            stack.pop()
      else:
         stack.append(int(v))
   for i, v in enumerate(stack):
      sum+=v
   print(sum)
   return sum
   

record_with_stack(['5','2','C','D','+']) # 30
record_with_stack(['5','-2','4','C','D','9','+','+']) # 27