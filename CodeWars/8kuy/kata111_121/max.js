/*
The problem this code attempts to solve is to
find the largest value possible by applying various
mathematical 
expressions to three given numbers.

*/
function expressionMaster(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        (a + b) * c,
        a * (b + c),
        a + b * c,
        a * b + c
    );
}

console.log(expressionMaster(1, 2, 3)); // Expected Output: 9