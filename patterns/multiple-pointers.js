/**
 * Multiple Pointers:
 * Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
 * 
 * Very efficient for solving problems with minimal space complexity as well
 * 
 * Example:
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
 */

const sumZero = (arr) => {
    if (arr.length < 2) return;
    // Set the boundaries
    let left = 0;
    let right = arr.length - 1;

    // Loop through until the left index is = right index, or a sum = 0 is found
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3] 
console.log(sumZero([-2, 0, 1, 3])); // Undefined
console.log(sumZero([1, 2, 3])); // Undefined
console.log(sumZero([1]));