/*
// ❓ Problem:
// Write a function called power(number) that does the following:
//
// - Define a base value of 2.
// - Calculate 2 raised to the power of the input number using Math.pow.
// - Create an empty array called result.
// - Use
*/
function power(number) {
    let num = 2;
    let result = [];
    let test = Math.pow(num, number);
    for (let i = 1; i <= test; i++) {
        result.push(i);
    }
    return result;
}

console.log(power(2));