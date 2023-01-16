/**
 * @Pattern Frequency Counter
 * @Prompt Write a function called sameFrequency. Given two positive integrers find out if the two numbers have the same frequency of digits.
 */

const sameFrequency = (num1, num2) => {
    // First we have to convert the numbers to strings so we can test the lengths of them
    const str1 = '' + num1;
    const str2 = '' + num2;
    if (str1.length !== str2.length) return false;
    
    // Initialize our empty frequency objects
    let frequency1 = {};
    let frequency2 = {};

    // Fill in the frequency objects with the number set to the key, then frequency of the number to the value
    for (let val of str1) frequency1[val] = (frequency1[val] || 0) + 1;
    for (let val of str2) frequency2[val] = (frequency2[val] || 0) + 1;

    console.log(frequency1);
    console.log(frequency2);

    for (let key in frequency1) {
        if (!(key in frequency2)) return false;
    }
    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));