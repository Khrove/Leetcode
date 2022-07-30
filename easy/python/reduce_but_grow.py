def reduceButGrow(arr: list):
    answer = 1
    for item in arr:
        answer = answer * item
    return answer


print(reduceButGrow([1, 2, 2, 4]))