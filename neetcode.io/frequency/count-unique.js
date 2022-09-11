/**
 * @desc Implement a function which takes in a sorted array and counts the number of unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 */

const unique = arr => {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i;
}

console.log(unique([1,1,1,1,1,4,1,2]));