/**
 * Prompt:
 * Given an integer array nums, return true if any value appears at least twice in the array and return false if every element is distinct
 * 
 * Link:
 * https://leetcode.com/problems/contains-duplicate/
 * 
 * RESULTS:
 * https://leetcode.com/problems/contains-duplicate/submissions/869876999/
 */

const containsDuplicate = (nums) => {
    if (nums.length < 1) return false;

    let frequency = {};

    for (let val of nums) frequency[val] = (frequency[val] || 0) + 1;

    for (let key in frequency) {
        if (frequency[key] > 1) return true;
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true