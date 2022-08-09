#!/usr/bin/env python3

# Complete the solution so that the function will break up camel casing, using a space between words.

def break_camelcase(string):
    return ''.join(list(map(upper, list(string))))

def upper(letter):
    return ' ' + letter if letter.isupper() else letter


print(break_camelcase('helloWorld'))
