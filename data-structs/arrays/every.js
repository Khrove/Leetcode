/**
 * Tests ALL the elements in an array. IF any element matches the corresponding condition then the function
 * returns true
 * @param el {any} takes in an element of an array and tests it against a condition set by a function
 */
const arr = [1, 100, 200, 300, 500];

arr.every((el, index, newArr) => {
    arr[index] += 150;
    console.log(`${newArr} ${index} = ${el}`);
    return el < 450;
});