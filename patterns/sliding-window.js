/**
 * Sliding Window:
 * This pattern involves creating a window which can either be an array or number from one position to another.
 * 
 * Depending on a certain condition, the window either increases or closes.
 * 
 * Very useful for keeping track of a subset of data in an array / string etc.
 * 
 * Example:
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
 */

const maxSubarraySum = (arr, target) => {
    if (arr.length < target) return null;

    let maxSum = 0;
    let tempSum = 0;

    // Create the first maximum sum
    for (let i = 0; i < target; i++) {
        // This looks like 2 + 6 + 9 = 17;
        maxSum += arr[i];
    }

    // Set the temp sum to the new max sum
    // 0 = 17;
    tempSum = maxSum;

    // Start the array at target since weve already added up t he beginning target of numbers
    // Loop starts at TARGET because we dont need to know the first couple of numbers up to target
    for (let i = target; i < arr.length; i++) {
        // First run through this looks like:
        // 17 - 2 + 2 (this is -2 because arr[i - target] is the first position in the array and arr[i] is the 3rd position, or 2)
        // Round two looks like 17 - 6 + 1 = 12 (9 + 2 + 1)
        // Round three looks like 12 - 9 + 8 = 11 (2 + 1 + 8)
        // Round four looks like 11 - 2 + 5 = 14 (1 + 8 + 5)
        // Round five looks like 14 - 1 + 6 = 19 (8 + 5 + 6)
        // Round six looks like 19 - 8 + 3 = 14 (5 + 6 + 3)
        tempSum = tempSum - arr[i - target] + arr[i];
        // 17 remains maxSum because 17 = 17
        // 17 remains maxSum because 12 < 17
        // 17 remains maxSum because 11 < 17
        // 17 remains maxSum because 14 < 17
        // 19 becomes maxSum because 19 > 17
        // 19 remains maxSum because 14 < 19
        maxSum = Math.max(maxSum, tempSum);
    }
    // Return 19
    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([], 4)); // null