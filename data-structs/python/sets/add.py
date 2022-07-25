# When a set is declared you cannot change its items, BUT you can add new items
set = {"apple", "banana", "cherry", "apple"}
set2 = {"pineapple", "mango", "papaya"}
set.add("orange")

# To add items from another set to a current set, use the update method
set.update(set2)

print(set)
