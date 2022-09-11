/**
 * @desc Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * Your solution must use only constant extra space.
 * @link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

const twoSum = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] === target) return [left + 1, right + 1];
        if (arr[left] + arr[right] > target) right--;
        else left++;
    }
    return false;
}

const forSum = (arr, target) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === target) return [i + 1, i + 2];
    }
    return false;
}

// console.log(forSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4, 7, 9], 11));
// console.log(twoSum([1, 2, 3], 100));