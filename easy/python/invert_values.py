#!/usr/bin/env python3

def invert_values(values: list):
    newLi = []
    for value in values:
        value *= -1
        newLi.append(value)

    return newLi


print(invert_values([1, 2, 3, 4, 5]))
print(invert_values([-1, 1, -2, -5, 10]))
