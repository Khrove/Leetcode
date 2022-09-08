const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    let frequency1 = {};
    let frequency2 = {};

    for (let val of str1) {
        frequency1[val] = (frequency1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequency2[val] = (frequency2[val] || 0) + 1;
    }

    console.log(frequency1);
    console.log(frequency2);

    for (let key in frequency1) {
        if (!(key in frequency2)) return false;
        if (frequency2[key] !== frequency1[key]) return false;
    }
    return true;
}

console.log(anagram('bananas', 'ananabt'));