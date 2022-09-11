/**
 * @desc A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 * @link https://leetcode.com/problems/valid-palindrome/
 */

const palindrome = s => {
    let combinedString = s.split(' ').join('').replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log(combinedString);
    let left = 0;
    let right = combinedString.length - 1;
    while (left < right) {
        if (combinedString[left] !== combinedString[right]) return false;
        else {
            left++;
            right--;
        }
    }
    return true;
}

console.log(palindrome('ab_a'));