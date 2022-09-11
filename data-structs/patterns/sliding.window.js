const maxArraySum = (arr, target) => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < target) return null;

    for (let i = 0; i < target; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = target; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));