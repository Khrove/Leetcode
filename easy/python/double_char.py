def double_char(string: str):
    newList = []
    list1 = list(string)
    for item in list1:
        newList.extend(item * 2)
    return ''.join(newList)


print(double_char("String!"))
print(double_char("1234!_ "))