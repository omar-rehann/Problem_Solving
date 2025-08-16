/*

The problem this code
solves is to determine whether
a given number is even or odd.

*/

function iseven(number) {
    if (number % 2 == 0) {
        return `Even Number`;
    } else {
        return ` Odd Number`;
    };
}
console.log(iseven(1));