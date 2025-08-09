/*
// ❓ Problem:
// Write a function called sum(a, b) that does the following:
//
// - Accepts two inputs, a and b, which may be strings representing numbers.
// - Converts both inputs to numbers using the unary plus operator (+).
// - Returns the result of adding the two numbers.
//
// Example:
// sum("5", "6") should return 11
//
// Note: Do not use parseInt or Number; use the + operator for conversion.
*/
function sum(a, b) {
    let test = +a + +b;
    return test;
}
console.log(sum("5", "6"))