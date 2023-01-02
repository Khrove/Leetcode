/**
 * This pattern uses objects or sets to collect values / frequencies to collect values / frequencies of values
 * 
 * This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
 * 
 * Objects: ARRAYS / STRINGS
 * 
 * Example problem:
 * Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
 */

const same = (arr1, arr2) => {
    // Check and see if the lengths do not match, if they dont then we can immediately return
    if (arr1.length !== arr2.length) return false;

    // Initialize empty objects to hold counters
    let frequency1 = {};
    let frequency2 = {};

    // Loop through each array and create the frequency object based on values
    // if the value does not exist in the object, then initialize to 0 and + 1
    // if the value exists in the object, then + 1
    for (let val of arr1) {
        frequency1[val] = (frequency1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequency2[val] = (frequency2[val] || 0) + 1;
    }

    console.log(frequency1);
    console.log(frequency2);

    // Using frequency counter 1 loop over they keys in it (in this case it will be 1, 2, 3)
    for (let key in frequency1) {
        // if the frequency 1 key squared does not exist in the second counter, then we return false
        if (!(key ** 2 in frequency2)) {
            return false;
        }

        // if the frequency 2 key squared does not exist in frequency 1 key then return false
        if (frequency2[key ** 2] !== frequency1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // TRUE
console.log(same([1, 2, 3], [1, 9])); // FALSE
console.log(same([1, 2, 1], [4, 4, 1])); // FALSE
