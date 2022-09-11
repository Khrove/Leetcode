/**
 * @desc Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * @link https://leetcode.com/problems/reverse-string/
 */

const reverseString = s => {
    let left = 0, right = s.length - 1;
      
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
      
        left++;
        right--;
    }
}

reverseString(['H', 'a', 'n', 'n', 'a']);
reverseString(['H', 'e', 'l', 'l', 'o']);