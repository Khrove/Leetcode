#!/usr/bin/env python3

def printer_errors(string: str):
    errors = 0
    length = len(string)
    s = "abcdefghijklm"
    for letter in string:
        if letter not in s:
            errors += 1

    return str(errors) + " / " + str(length)



print(printer_errors("abccccccdddddeasaszzz"))
