/**
 * @Pattern Frequency Counter / Multiple Pointer
 * @Prompt Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in
 */

const areThereDuplicates = (...args) => {
    let frequency = {};

    for (let val of args) frequency[val] = (frequency[val] || 0) + 1;

    console.log(frequency);

    for (let key in frequency) {
        if (frequency[key] > 1) return true;
    }
    return false;
}

const areThereMultiplePointers = (...args) => {
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) return true;
        start++;
        next++;
    }
    return false;
}

const areThereSets = (...args) => {
    return new Set(args).size !== args.length;
}

console.log(areThereDuplicates(1, 2, 3)); // False
console.log(areThereDuplicates(1, 2, 2)); // TRUE
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // TRUE