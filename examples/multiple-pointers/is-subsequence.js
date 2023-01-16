/**
 * @Pattern Multiple Pointers
 * @Prompt Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string without their order changing.
 */

const isSubsequence = (str1, str2) => {
    let count = 0;
    for (let c of str2) {
        if (str1[count] === c) {
            console.log(str1[count] + ' ' + c);
            count++;
        }
    }
    return (str1.length === count);
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));