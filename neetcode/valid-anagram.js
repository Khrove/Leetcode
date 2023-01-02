/**
 * Prompt:
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * An anagram is a word or phrase formed by re-arranging the letters of a different word or phrase. typically using all the original letters exactly once.
 * 
 * Link:
 * https://leetcode.com/problems/valid-anagram/
 * 
 * Results:
 * https://leetcode.com/problems/valid-anagram/submissions/869883320/
 */

const validAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    let frequency1 = {};
    let frequency2 = {};

    for (let val of s) frequency1[val] = (frequency1[val] || 0) + 1;
    for (let val of t) frequency2[val] = (frequency2[val] || 0) + 1;

    for (let key in frequency1) {
        if (!(key in frequency2)) return false;
        if (frequency2[key] !== frequency1[key]) return false;
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false