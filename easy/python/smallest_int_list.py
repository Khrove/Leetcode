def smallest_int(intList: list):
    smallest = intList[0]
    for item in range(len(intList)):
        if intList[item] < smallest:
            smallest = intList[item]
    return smallest


print(smallest_int([34, 15, 88, 2, 1]))