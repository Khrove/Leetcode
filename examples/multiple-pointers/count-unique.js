/**
 * Prompt:
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in ther array, but it will always be sorted.
 */

const countUniqueValues = (arr) => {
    if (arr.length < 2) return;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 8]));