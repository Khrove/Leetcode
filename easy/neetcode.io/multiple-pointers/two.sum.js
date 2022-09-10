/**
 * @desc Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @link https://leetcode.com/problems/two-sum/
 */

const twoSum = (arr, target) => {
    let right = arr.length - 1;
    for (let i = 0; i <= right; i++) {
        for (let j = i + 1; j <= right; j++) {
            if (arr[i] + arr[j] === target) return [i, j];
        }
    }
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));



