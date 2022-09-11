/**
 * @desc Given an integer array nums, return true if any value appears at least twice in the array,
 *  and return false if every element is distinct.
 * @link https://leetcode.com/problems/contains-duplicate/
 */

const duplicate = arr => {
    if (arr.length <= 1) return false;

    let frequency = {};

    for (let val of arr) {
        frequency[val] = (frequency[val] || 0) + 1;
    }

    for (let key in frequency) {
        if (frequency[key] > 1) {
            return true;
        }
    }
    return false;
}

console.log(duplicate([1,1,1,3,3,4,3,2,4,2]));