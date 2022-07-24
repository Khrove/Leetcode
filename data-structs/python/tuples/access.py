# Tuples are zero based

# Negative indexing starts at end of tuple

tuple = ("apple", "banana", "cherry", "apple", "cherry")

print(tuple[0])
print(tuple[-1])

# Range of indexes
print(tuple[1:4])

# Range while leaving out the beginning number, does not print the ending index value out
print(tuple[:4])

# Conditional checking
if "apple" in tuple:
    print("There is indeed an apple in the tuple")
