#!/usr/bin/env python3

# ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

# If the function is passed a valid PIN string, return true, else return false.

def isRegex(string: str):
 if len(string) > 4 or len(string) > 6 or len(string) == 5:
     return False

 return string.isdigit()

print(isRegex("ab12"))
print(isRegex("1234"))
print(isRegex("ab1234"))
print(isRegex("abcd"))
