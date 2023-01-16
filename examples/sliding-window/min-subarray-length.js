/**
 * @Pattern Sliding Window
 * @Prompt Write a function called min sub array length which accepts two parameters - an array of positive integers and a positive integer.
 * 
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there is not one, then return 0.
 */

const minSubArrayLen = (arr, target) => {
    let p1 = 0;
    let p2 = 0;
    let currentSum = 0;
    let minLength = arr.length;

    while (p1 < arr.length && p2 < arr.length) {
        currentSum += arr[p2];
        p2++;
        
        if (currentSum >= target) {
            minLength = Math.min(minLength, p2 - p1);
            currentSum = 0;
            p1++;
            p2 = p1;
        }
    }
    return minLength === arr.length ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> becuase [4,3] is the smallest
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is larger than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5