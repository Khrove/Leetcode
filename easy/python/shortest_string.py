#!/usr/bin/env python3

# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.
def findShort(string: str):
    arr = string.split(' ')
    answer = arr[0]
    for item in arr:
        if len(item) < len(answer):
            answer = item
    return len(answer)


print(findShort("Bitcoin is a magnificent thing"))
