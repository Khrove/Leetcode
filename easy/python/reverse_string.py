def reverse_string(string: str):
    # Variable initialization
    list1 = []
    reversed1 = []
    # Convert string -> list
    list1[:0] = string
    # Reverse the list
    for item in reversed(list1):
        reversed1.append(item)
    # Join the list back together into a string and return the now reversed string
    return ''.join(reversed1)

print(reverse_string("bingo"))


def easy_solution(string: str):
    list1 = list(string)
    list1.reverse()
    return ''.join(list1)


print(easy_solution("bongo"))