#!/usr/bin/env python3

def list_filtering(arr: list):
    newArr = []
    for item in arr:
        if type(item) is not str:
            newArr.append(item)

    return newArr

print(list_filtering(["a", "b", "1", 1, 2]))
print(list_filtering([1, 2, 3, 4, 5]))
print(list_filtering(["ab", "c", "d"]))
