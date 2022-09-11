/**
 * @desc Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 */

const sameFrequency = (num1, num2) => {
    const str1 = '' + num1;
    const str2 = '' + num2;
    if (str1.length !== str2.length) return false;

    // Initialize Objects
    let frequency1 = {};
    let frequency2 = {};

    // Hydrate objects
    for (let val of str1) {
        frequency1[val] = (frequency1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequency2[val] = (frequency2[val] || 0) + 1;
    }

    // Iterate through frequency objects and determine if the two nums have the same frequency
    for (let key in frequency1) {
        if (!(key in frequency2)) return false;
    }
    return true;
}


console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false