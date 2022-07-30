def square_and_sum(nums):
    answer = 0
    for item in range(len(nums)):
        answer += (nums[item] * nums[item])
    return answer


print(square_and_sum(nums=[4, 2, 2]))