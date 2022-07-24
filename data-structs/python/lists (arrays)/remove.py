list = ["apple", "banana", "pear", "excalibur", "remus", "bingo"]
# Remove a specific string from list, the string or value MUST exist in the list else an error is thrown
list.remove("pear")
# list.remove("random")

# Pop removes a specific index from a list, if no value is provided then the final value is removed
list.pop(4)
list.pop()

# the del keyword removes a specific index, OR the entire list if no index is provided
# deleting the list will remove the data structure, unlike clear which just empties it
del list[1]
# del list

# the clear keyword empties the list, BUT the data structure still exists and can be re populated
list.clear()

print(list)