/*
* Mutates the array permanently, ie if you do it multiple times you will be using the mutated array rather than
* the original one
* @target Position that you want to update, 0 based
* @start Starting position that you want to copy
* @end Ending position that you want to copy. To copy just one element provide the index of the element that comes
* after the @start index value. THIS VALUE MUST BE AN INDEX AFTER THE STARTING INDEX TO WORK. Nothing will
* happen if you provide a value that comes after the @start index
 */
const arr1 = [1, 2, 3, 4, 5, 6];

// console.log(arr1.copyWithin(1, 3, 5));
console.log(arr1.copyWithin(2, 3,4));