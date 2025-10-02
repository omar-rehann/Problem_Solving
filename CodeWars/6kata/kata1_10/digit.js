/*
problem is:

👉 Write a function digit(num) that repeatedly sums the digits of a number until the result becomes a single-digit number.


*/

function digit(num) {
    let test = Array.from(String(num));
    let z = [];
    let result = test.reduce(function(one, two) {
        return +one + +two;
    });
    if (String(result).length == 1) {
        return result
    } else {
        return digit(result)
    }
}
console.log(digit(942))