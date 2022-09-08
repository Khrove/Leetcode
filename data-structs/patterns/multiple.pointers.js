/**
 * @desc Implement a function which takes in a sorted array and counts the number of unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 */

const sumZero = arr => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]]
        else if (sum > 0) right--;
        else left++;
    }
    return undefined;
}

console.log(sumZero([-4, -3, -2, 1, 2, 3, 4]));