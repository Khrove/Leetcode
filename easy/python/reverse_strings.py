#!/usr/bin/env python3

def reverse_words(string: str):
    strList = []
    for word in string.split(' '):
      strList.append(word[::-1])

    return ' '.join(strList)


print(reverse_words("Bingo"))
reverse_words("A B C D")
reverse_words("This is a list of words")
