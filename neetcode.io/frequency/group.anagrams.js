/**
 * @desc Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the * original letters exactly once.
 * @link https://leetcode.com/problems/group-anagrams/
 * @pattern Frequency Counter
 */

const groupAnagrams = (arr) => {
    let frequencyArr = [];
    // For each value in the array create a new frequency counter object
    arr.forEach(el => {
        let frequencyObj = {};

        for (let val of el) {
            frequencyObj[val] = (frequencyObj[val] || 0) + 1;
        }

        frequencyArr.push(frequencyObj);
    });

    // For each frequency counter object we will need to create a new array of string arrays to return 
    let answer = [];
    frequencyArr.forEach(el => {
        for (let key in el) {
            
        }
    });

    return answer;
}


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));