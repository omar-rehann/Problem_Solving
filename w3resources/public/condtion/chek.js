/*
Problem Statement:
Write a function called check that takes a number and returns whether
it is an even number or an odd number.

*/
function check(number) {
    if (number % 2 == 0) {
        return "Eeven Number"
    } else {
        return "Odd Number"
    }
}
console.log(check(5))