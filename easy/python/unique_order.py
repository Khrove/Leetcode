#!/usr/bin/env python3

#Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements
#with the same value next to each other and preserving the original order of elements.
def unique_in_order(iterable):
    answer = [iterable[0]]
    currEl = iterable[0]
    for element in range(len(iterable)):
        if iterable[element] == currEl:
            iterable[element].pop()
        else:
            currEl = iterable[element]
            answer.push(currEl)
    return


    
print(unique_in_order('AAAABBBCCDAABBB'))
