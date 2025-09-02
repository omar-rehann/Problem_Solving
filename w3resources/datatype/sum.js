/*

Problem Statement:
Write a function called sumdigit that takes a string of digits
as input and returns the sum of
all the individual digits in the string.

*/


function sumdigit(str) {
    let test = Array.from(str);
    let result = test.reduce(function(one, two) {
        return +one + +two;
    })
    return result;
}
console.log(sumdigit("1234"));