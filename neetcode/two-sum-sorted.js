const twoSum = (arr, target) => {
    let i = 0;
    let j = arr.length;
    while (i < j) {
        if (arr[i] + arr[j] === target) return [i + 1, j + 1];
        else if (arr[i] + arr[j] < target) i++;
        else j--;
    }
}

console.log(twoSum([5, 25, 75], 100));