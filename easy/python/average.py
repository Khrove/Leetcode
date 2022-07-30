import statistics


# def average(nums):
#     return statistics.mean(nums)

def average(nums):
    if len(nums) == 0:
        return 0

    return sum(nums) / len(nums)


print(average(nums=[2, 3, 4, 5, 6]))
