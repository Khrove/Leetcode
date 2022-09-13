/**
 * @desc Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 */

const minSubArrayLen = (arr, target) => {
    if (arr.length < 2) return 0;

    let left, right, minLen = 0;
    let tempLen;
    let tempSum = arr[left];

    while (right < arr.length) {
        if (tempSum < target) {
            right++;
            if (arr[right]) tempSum += arr[right];
        } else {
            tempLen = right - left + 1;
            minLen = minLen ? Math.min(minLen, tempLen) : tempLen;
            if (minLen === 1) return 1;
            tempSum -= arr[left];
            left++;
        }
    }
    console.log(minLen);
    return minLen;
}

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray