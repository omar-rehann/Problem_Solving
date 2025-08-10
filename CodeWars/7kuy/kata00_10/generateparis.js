/*

rite a function that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the condition
0 <= a <= b <= n
*/
function generatePairs(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            result.push([i, j]);
        }
    }
    return result;
}

console.log(generatePairs(2));