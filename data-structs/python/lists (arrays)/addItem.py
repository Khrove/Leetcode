list = ["apple", "banana", "pear", "excalibur", "remus", "bingo"]

list.append("beengo")

list.insert(4, "Bananagrams")

print(list)

# Combine two arrays
secondList = ["1", "2", "4"]
list.extend(secondList)
print(list)

# You can combine different iterable data struct with a list (tuples, sets, dicts)
tuple = ("bingo", "wongo")
set = {"dingo", "dango"}
dict = {
    "1": "one",
    "2": "two",
    "3": "three"
}
list.extend(dict)
print(list)
