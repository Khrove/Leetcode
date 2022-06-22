/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 * Example 2:
 *
 * Input: nums = [1,2,3,4]
 * Output: false
 * Example 3:
 *
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */

function containsDuplicate(nums) {
    if (nums.length === 0) return false;
    if (nums.length === 1) return false;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));

function containsDuplicates(nums) {
    return nums.sort().some((a, i) => a === nums[i - 1]);
}

console.log(containsDuplicates([1, 2, 3, 4, 1]));
