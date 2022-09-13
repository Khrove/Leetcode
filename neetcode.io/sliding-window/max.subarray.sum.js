/**
 * @desc Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
 *  Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 */

const maxSubarraySum = (arr, target) => {
    if (arr.length < target) return null;

    let maxSum = 0;

    for (let i = 0; i < target; i++) {
        maxSum += arr[i];
    }

    let tempSum = maxSum;

    for (let i = target; i < arr.length; i++) {
        tempSum = tempSum - arr[i - target] + arr[i];
        maxSum =  Math.max(maxSum, tempSum);
    }

    return maxSum;
}

 console.log(maxSubarraySum([100,200,300,400], 2)) // 700
 console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 