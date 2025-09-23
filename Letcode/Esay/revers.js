/*

Problem: Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range:



*/


var reverse = function(x) {
    let test = Array.from(String(x)).reverse().join("");
    return test;
}
console.log(reverse(123));