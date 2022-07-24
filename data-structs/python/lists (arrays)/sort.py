# The sort function is CASE SENSITIVE, so if you're sorting strings it might be worth to lowercase or uppercase
# all values before sorting

list = ["apple", "banana", "pear", "excalibur", "remus", "bingo"]
numList = [100, 60, 50, 30, 40, 1000]

# Sort a list to be ASC
list.sort()

# Sort a list to be DESC
list.sort(reverse=True)

# Provide a custom function to act as a sort
def absoluteVal(n):
    return abs(n - 50)

numList.sort(key = absoluteVal)

# Case sensitive
list.sort(key = str.upper)

# Reverse order a list
list.reverse()

print(list)
print(numList)