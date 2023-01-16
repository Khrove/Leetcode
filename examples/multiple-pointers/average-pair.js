/**
 * @Pattern Multiple Pointer
 * @Prompt Write a function called average pair, given a sorted array of integers and a target average, determineif there is a pair of values in the array where the average of the pair equals the target average.
 */

const averagePair = (arr, target) => {
    if (arr.length < 1) return false;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let average = (arr[left] + arr[right]) / 2;
        if (average === target) return true;
        if (average > target) right--;
        else left++;
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));