/**
 * Prompt:
 * Given two strings, write a fucntion to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by re-arranging the
 * letters of another, such as cinema, formed from iceman.
 * 
 * Good edge case questions to ask:
 * Will the params always be all lowercase?
 * Any special characters?
 */

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let frequency1 = {};
    let frequency2 = {};

    for (let val of str1) frequency1[val] = (frequency1[val] || 0) + 1;

    for (let val of str2) frequency2[val] = (frequency2[val] || 0) + 1;
    
    for (let key in frequency1) {
        if (!(key in frequency2)) return false;
        if (frequency2[key] !== frequency1[key]) return false;
    }
    return true;
}

// console.log(anagram('', '')); // true
// console.log(anagram('aaz', 'zza')); // false
// console.log(anagram('anagram', 'nagaram')); // true
console.log(anagram('texttwisttime', 'timetwisttext')); // true