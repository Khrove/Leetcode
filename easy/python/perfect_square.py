def perfect_square(num: int):
    if num < 0 or num == 0:
        return False

    sqrt = num ** (1 / 2)
    return sqrt.is_integer()


print(perfect_square(4))
print(perfect_square(3))
print(perfect_square(-1))
print(perfect_square(0))
