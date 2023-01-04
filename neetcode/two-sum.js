/**
 * Prompt:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Link:
 * https://leetcode.com/problems/two-sum/
 * 
 * Result:
 * https://leetcode.com/problems/two-sum/submissions/870857795/
 */

const twoSum = (arr, target) => {
    let right = arr.length - 1;
    for (let i = 0; i <= right; i++) {
        for (let j = i + 1; j <= right; j++) {
            if (arr[i] + arr[j] === target) return [i, j];
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));