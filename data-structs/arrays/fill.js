/**
 * Takes an array and fills in the specified indexes with a given value
 * @param {value} Value that you want to fill in the array with
 * @param {start} Starting position that you want to mutate
 * @param {end} Ending position that you want to mutate
 */
const arr = [1, 2, 3, 4, 5, 0];
const arr2 = new Array(3);

console.log(arr.fill(0, 2, 3));

for (let i = 0; i < arr2.length; i++) {
    arr2.fill(1);
}

console.log(arr2);
