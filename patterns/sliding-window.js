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
        // This looks like 1 + 2 = 3;
        maxSum += arr[i];
    }

    // Set the temp sum to the new max sum
    // 0 = 3;
    tempSum = maxSum;

    // Start the array at target since weve already added up t he beginning target of numbers
    for (let i = target; i < arr.length; i++) {
        // First run through this looks like:
        // round 1 -- 3 - (2 - 2) + 2 == 5
        tempSum = tempSum - arr[i - target] + arr[i];
        // 6 becomes maxSum because it's > 3
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([], 4)); // null