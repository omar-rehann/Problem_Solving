function dontfive(start, end) {
    let result = []
    for (let i = start; i <= end; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            continue;
        } else {
            result.push(i)
        }
    }
    return result.length
}
console.log(dontfive(4, 17))