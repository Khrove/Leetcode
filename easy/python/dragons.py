def dragons(bullets: int, numOfDragons: int):
    if (bullets / 2) >= numOfDragons:
        return True
    return False


print(dragons(10, 5))
print(dragons(7, 4))
print(dragons(4, 5))