/*

Problem 2: Function 2 – Squaring an Argument

Description: Write a function that takes a number as an argument and returns its square (the number multiplied by itself).

Examples:

2 → 4
5 → 25

*/

//  7 kata
function square(n) {
    return n * n;
}

// Arrow function using the exponent operator
const square = n => n ** 2;

// Using Math.pow
const square = n => Math.pow(n, 2);