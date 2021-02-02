import math
import itertools

def nth_digit(number, digit):
    return abs(number) // (10**(digit)) % 10

def digit_count(digit):
    count = len(str(digit))
    return int(count)

def mostDigits(nums):
    count = 0
    for num in nums:
        count = count if ((digit_count(num)) < count) else digit_count(num)
    return count

# for each iteration of the breadth of the largest number
# create n buckets where n is base
# for each value to be sorted
# get the base of it's right most digit and store the value in the associated bucket
# collate the results at the end of each iteration of the max value breadth

def sort(array):
    breadth = mostDigits(array)
    
    for i in range(breadth):
        buckets = [[] for j in range(10)]
        for num in array:
            currentDigit = nth_digit(num, i)
            bucket = buckets[currentDigit].append(num)

        array = list(itertools.chain.from_iterable(buckets))
    return array

print(sort([12245, 3, 123546]))
print(sort([2313231,2255,3334,4]))