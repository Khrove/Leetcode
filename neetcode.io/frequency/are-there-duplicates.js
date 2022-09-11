/**
 * @desc Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks   *   whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter *   pattern OR the multiple pointers pattern.
 * @patterns Frequency Counter + Multiple Pointers
 */

const areThereDuplicates = (...args) => {
    if (args.length < 1) return false;

    // Initialize frequency Objects
    let frequency = {};

    for (let val of args) {
        frequency[val] = (frequency[val] || 0) + 1;
        if (frequency[key] > 1) return true;
    }
    return false;
}

const multiplePointers = (...args) => {
    if (args.length < 1) return false;

    
}


 console.log(areThereDuplicates(1, 2, 3)) // false
 console.log(areThereDuplicates(1, 2, 2)) // true 