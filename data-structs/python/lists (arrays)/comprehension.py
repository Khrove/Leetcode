list = ["apple", "banana", "pear", "excalibur", "remus", "bingo"]
# newList = []

# for item in list:
#     if "a" in item:
#         newList.append(item)

# Syntax = [Expression for item in iterable, condition]
newList = [item for item in list if "a" in item]

newList = [item.upper() for item in list if "a" in item]

# You can also use the range function to create an iterable
newList = [item for item in range(100) if item % 2 == 0]

print(newList)
