/**
 * @Pattern Sliding Window
 * @Prompt Write a function called find longest substring, which accepts a string and returns the length of the longest substring with all distinct characters.
 */

const findLongestSubstring = (string) => {
    if (string.length < 1) return 0;

    let p1 = 0;
    let p2 = 0;
    let answers = [];
    let tempLongest = 0;
    let longest = 0;
    let answer = 0;

    while (p2 < string.length) {
        p2++;
        console.log(string.charAt(p1) + ' ' + string.charAt(p2));
        answer = Math.max(tempLongest, longest);

        if (string.charAt(p1) !== string.charAt(p2) && !answers.includes(string.charAt(p1))) {
            answers.push(string.charAt(p1));
            tempLongest++;
            p1++;
        } else {
            if (longest < tempLongest) longest = tempLongest;
            tempLongest = 0;
            p1++;
            p2 = p1;
            answers = [];
        }
    }
    return answer;
}

// console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6