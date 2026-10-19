/*

Problem 2: Take the Derivative
Description: Write a function derive that takes two parameters coefficient and exponent and returns the derivative of the term coefficient * x^exponent as a string.

Math rule: The derivative of c * x^n is (c * n) * x^(n-1)

Examples:

derive(7, 8) → "56x^7"

derive(5, 9) → "45x^8"

*/
function derive(coefficient, exponent) {
    const newCoefficient = coefficient * exponent;
    const newExponent = exponent - 1;
    return `${newCoefficient}x^${newExponent}`;
}