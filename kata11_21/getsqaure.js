/**
 * Write a function named getSquare that takes an array of numbers.
 * For each number:
 *  - If its square root is an integer, return that square root.
 *  - Otherwise, return the square of the number.
 * 
 * Examples:
 * getSquare([1, 2, 3, 4]) => [1, 4, 9, 2]
 */

function getsqaure(array) {
    return array.map(function(e) {
        let sqrt = Math.sqrt(e);
        if (Number.isInteger(sqrt)) {
            return sqrt; // رجّع الجذر
        } else {
            return e * e; // رجّع مربعه
        }
    });
}

console.log(getsqaure([1, 2, 3, 4])); // [1, 4, 9, 2]