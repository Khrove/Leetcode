#!/usr/bin/env python3

# Given two integers a and b, which can be positive or negative, find the sum of all the integers between
# and including them and return it. If the two numbers are equal return a or b.

# Note: a and b are not ordered!
# (1, 0) --> 1 (1 + 0 = 1)
# (1, 2) --> 3 (1 + 2 = 3)
# (0, 1) --> 1 (0 + 1 = 1)
# (1, 1) --> 1 (1 since both are same)
# (-1, 0) --> -1 (-1 + 0 = -1)
# (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
# (1, 4) --> 1 + 2 + 3 + 4
# (-4, 3) --> -4 + -3 + -2 + -1 + 0 + 1 + 2 + 3

def sumOfNumbers(num1, num2):
    if num1 == num2:
        return num1

    answer = 0

    if num2 > num1:
        for item in range(num1, num2 + 1, 1):
            answer += item

    if num1 > num2:
        for item in range(num2, num1 + 1, 1):
            answer += item
    return answer

print(sumOfNumbers(1, 4))
print(sumOfNumbers(-4, 3))
print(sumOfNumbers(1, 0))
