/**
 * @Pattern Sliding Window
 * @Prompt Given an array of integers and a number, write a function called max subarray sum, which finds the maximum sum of a subarray with the length of the number passed to the function
 */

const maxSubarraySum = (arr, target) => {
    if (arr.length < 1) return null;
    let maxSum = 0;

    // Create the first maximum sum
    for (let i = 0; i < target; i++) {
        // 100 + 200 = 300
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = target; i < arr.length; i++) {
        // Round one looks like 300 - 100 + 300 = 500
        // Round two looks like 500 - 200 + 400 = 700
        tempSum = tempSum - arr[i - target] + arr[i];
        // 500 becomes maxSum because 500 > 300
        // 700 becomes maxSum because 700 > 500, end loop as 400 is final element
        maxSum = Math.max(maxSum, tempSum);
    }
    // return 700
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700