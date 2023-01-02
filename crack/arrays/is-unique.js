/*
* @desc Implement an algorithm to determine if a string has all unique characters
* @patterns
*/

const isUnique = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; i <= str.length; i++) {
            console.log(str[i] + ' ' + str[j]);
            if (str[i] === str[j]) return false;
        }
    }
    return true;
}

console.log(isUnique('BingoBango')); // False
console.log(isUnique('Bongi')); // True