# When you assign values to a tuple you need a way to "unpack" them. This is called unpacking which is kind of like spreading in JS

fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

# You can use the asterisk to assign multiple values to a certain variable
# If you put the asterisk on say a middle variable, then the left and right variable will contain an even amount of values
# in this case, 5 = 3 in middle, and 1 on each side
# 7 would be 5 in the middle, 1 on each side
(green, *yellow, red) = fruits

print(green)
print(yellow)
print(red)