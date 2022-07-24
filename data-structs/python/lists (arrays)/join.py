list = ["apple", "banana", "pear", "excalibur", "remus", "bingo"]
list2 = [1, 2, 3, 4]

list3 = list + list2

# You can also use a for loop to append lists together
# for item in list2:
#     list.append(item)

# You can also use extend whose purpose is to add two lists together
list.extend(list2)

print(list)
print(list3)