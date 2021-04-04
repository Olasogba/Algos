'''
Find the number of ways that a given integer,X, can be expressed as the sum of the Nth powers of unique, natural numbers.

For example, if X=13 and N=2, we have to find all combinations of unique squares adding up to 13. The only solution is 2^2 + 3^2.

Function Description

Complete the powerSum function in the editor below. It should return an integer that represents the number of possible combinations.

powerSum has the following parameter(s):

- X: the integer to sum to
- N: the integer power to raise numbers to

Input Format

The first line contains an integer X.
The second line contains an integer N.

Constraints
- 1 <= X <= 1000
- 2 <= N <=10

Output Format
Output a single integer, the number of possible combinations caclulated.

Sample Input 0
10
2

Sample Output 0
1

Explanation 0

If X=10 and N=2, we need to find the number of ways that 10 can be represented as the sum of squares of unique numbers.
10 = 1^2 + 3^2

This is the only way in which 10 can be expressed as the sum of unique squares.
'''
import math
def powerSum(X, N, exponentIncrement = 1):
    exponentVal = X - math.pow(exponentIncrement, N);
    if (exponentVal < 0): return 0;
    elif (exponentVal == 0): return 1;
    # solving for X-y^n in the case where we don't have an exact exponent and X-y^n == 0, 
    # the case where we have an exact exponent?
    else: return powerSum(exponentVal, N, exponentIncrement + 1) + powerSum(X, N, exponentIncrement + 1);


# print(powerSum(10,2))
# print(powerSum(100,2))
print(powerSum(8,3))
