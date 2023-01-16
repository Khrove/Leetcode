/**
 * @Pattern Divide and Conquer
 * @Desc This pattern involves dividing a data set into smaller chunks and then repeating a process with a sub set of data
 * 
 * @Benefits This pattern can tremendously decrease time complexity, ALTHOUGH the array must be sorted
 * 
 * @Example Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
 */

const search = (array, target) => {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentEl = array[middle];

        if (currentEl < target) min = middle + 1;
        else if (currentEl > target) max = middle - 1;
        else return middle;
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 11)); // 3