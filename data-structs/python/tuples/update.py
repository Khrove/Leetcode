# Although Tuples are not mutable, there are work-arounds by converting it to a list
tuple = ("apple", "banana", "cherry", "apple", "cherry")

newList = list(tuple)
print(type(newList))
print(newList)

newList[1] = "Kiwi"

print(newList)


# You can also add a tuple to a tuple
newTuple = ("banana", "apple", "bingo")
y = ("orange",)
newTuple += y

print(newTuple)