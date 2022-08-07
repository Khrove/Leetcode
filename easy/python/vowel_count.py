#!/usr/bin/env python3

# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.
def vowelCount(string: str):
    vowels = ['a', 'e', 'i', 'o', 'u']
    arr = string.split()
    vowels = 0
    for item in arr:
        word = item.split()
        for char in word:
            if char in vowels:
                vowels + 1
    return vowels



print(vowelCount('This is a sentence'))
