#!/usr/bin/env python3

# In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
# high_and_low("1 2 3 4 5")  # return "5 1"
# high_and_low("1 2 -3 4 5") # return "5 -3"
# high_and_low("1 9 3 4 -5") # return "9 -5"

def high_and_low(numbers):
    arr = numbers.split(' ')
    numArr = list(map(int, arr))
    return str(max(numArr)) + " " + str(min(numArr))


print(high_and_low('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))
