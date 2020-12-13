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

def record_n2(strings: list):
   return None

def record_with_stack(strings: list):
   return None

record(['5','2','C','D','+']) # 30
record(['5','-2','4','C','D','9','+','+']) # 27