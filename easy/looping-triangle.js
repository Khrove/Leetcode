function triangles(length) {
    for (let result = '#'; result.length < length + 1; result = result + '#') {
        console.log(result);
    }
}

triangles(4);