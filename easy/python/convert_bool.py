def convert_bool(boolean: bool):
    if boolean:
        return "Yes"
    else:
        return "No"

print(convert_bool(True))
print(convert_bool(False))