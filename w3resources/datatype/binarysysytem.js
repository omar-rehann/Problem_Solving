/*
Problem Statement:
Write a function called binary that takes
a binary number (as a number or string of digits) and
converts it to its decimal (base-10) equivalent.


*/

function binary(num) {
    let result = 0;
    let test = Array.from(String(num)).reverse();
    for (let i = 0; i < test.length; i++) {
        result += test[i] * (2 ** i);
    }
    return result;
}
console.log(binary(1011))