/*
* Creates a new array iterator object containing an index / value of a source array
* Can iterate through the new object using a loop of sorts
 */
const arr1 = [1, 2, 3, 1, 2, 3];
const it = arr1.entries();

for (const [i, val] of it) {
    console.log(i, val);
}