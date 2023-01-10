/**
 * Prompt:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i !=k, and j != k, and nums[i] + nums[j] + nums[k] == 0
 * 
 * Notice that the solution set must not contain duplicate triplets.
 */

const threeSum = (arr) => {
    if (arr.length < 3) return;

    let answer = [];

    arr = arr.sort((a,b) => a - b );

    // Loading the answer array
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i] + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                for (let k = arr[j] + 1; k < arr.length; k++) {
                    if (arr[j] !== arr[k]) {
                        if (arr[i] + arr[j] + arr[k] === 0) answer.push([arr[i], arr[j], arr[k]]);
                    }
                }
            }
        }
    }
    let newans = Array.from(new Set(answer.map(JSON.stringify)), JSON.parse);
    console.log(newans);
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));