/**
 * Create a function called basic that takes three parameters:
 * - op: a string representing the operation ("+", "-", "*", or "%")
 * - v1: the first number
 * - v2: the second number
 * 
 * The function should return the result of the operation between v1 and v2.
 * If the operation is not one of the supported types, return a message like "Unsupported operation".
 * 
 * Example:
 * basic("*", 2, 3) => 6
 */

function basic(op, v1, v2) {
    switch (op) {
        case "+":
            return v1 + v2;
            break;
        case "-":
            return v1 - v2;
            break;
        case "*":
            return v1 * v2;
            break;
        case "+":
            return v1 % v2;
            break;
    }
}
console.log(basic("*", 2, 3))