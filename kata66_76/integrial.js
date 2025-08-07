/*
Create a function that finds the integral (https://en.wikipedia.org/wiki/Integral) of the expression passed.
In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
Notes:
The output should be a string.
The coefficient and exponent is always a positive integer.

*/
function integrate(coefficient, exponent) {
    const newExponent = exponent + 1;
    const newCoefficient = coefficient / newExponent;
    return `${newCoefficient}x^${newExponent}`;
}

console.log(integrate(3, 2)); // Output: "1x^3"
console.log(integrate(12, 2)); // Output: "4x^3"
console.log(integrate(5, 4)); // Output: "1x^5"