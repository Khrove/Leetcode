/**
 * Prompt:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * Link:
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * Result:
 * https://leetcode.com/problems/valid-palindrome/submissions/871445362/
 */

const isPalindrome = (string) => {
    let n = string.replace(/\W/g, "").replace("_", "").toLowerCase();
    let i = 0;
    for (let j = n.length - 1; j > i; j--) {
        console.log(n.charAt(i) + ', ' + n.charAt(j));
        if (n.charAt(i) !== n.charAt(j)) return false;
        else i++;
    }
    return true;
}


console.log(isPalindrome("ab_a"));