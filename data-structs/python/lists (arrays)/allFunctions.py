list = ["apple", "banana", "pear", "excalibur", "remus", "bingo"]

# append - appends an item or a list to a list
list.append("bingo2")
#list.append(["bongo3", "bongo4"])

# clear - Removes all items from a list, does not delete the data structure
# list.clear()

# copy - Returns a copy of a list
newList = list.copy()

# count - Returns a count of specific items in a list
print(list.count("apple"))

# extend - Add the elements of a list to the end of another list
newList.extend(list)

# index - Returns the index of a value that matches what you provide
print(newList.index("pear"))

# insert - Inserts a value at a specified position
newList.insert(1, "insert")

# pop - Removes a value at a specified index
newList.pop(0)

# remove - Removes an item with a specified value
newList.remove("bingo")

# reverse - Reverses the list
newList.reverse()

# sort - Sorts the list given a provided key + function, or reverse = True
# ASC
#newList.sort()

# DESC
#newList.sort(reverse=True)

# Function
newList.sort(key=str.upper)


print(list)
print(newList)