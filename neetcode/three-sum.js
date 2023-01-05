/**
 * Prompt:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i !=k, and j != k, and nums[i] + nums[j] + nums[k] == 0
 * 
 * Notice that the solution set must not contain duplicate triplets.
 */

const threeSum = (arr) => {
    if (arr.length < 3) return;

    let answer = [];
    let i = 0;
    let j = i + 1;
    let k = i + 2;

    for (let i = 0; i < arr.length; i++) {
        
    }
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));