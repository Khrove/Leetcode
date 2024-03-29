const validAnagram = (first, second) => {
    if (first.length !== second.length) return false;

    let lookup = {};
    
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, else set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    console.log(lookup);

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find the letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'));