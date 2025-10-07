/*
Problem:
A Narcissistic number (also known as an Armstrong
number) is a positive
number that is the sum of its own digits,
each raised to the power of the number of digits.

Write a function narcissistic(value)
that returns true if the given number is Narcissistic,
and false otherwise.

*/
function armstrongnumber(value) {
    let test = Array.from(String(value));
    let result = test.map(function(e) {
        return e ** test.length
    }).reduce(function(one, two) {
        return one + two
    })
    if (result == value) {
        return " True this is Armstrong Number"
    } else {
        return " Flase This is not Armstrong Number"
    }
}
console.log(armstrongnumber(1652))