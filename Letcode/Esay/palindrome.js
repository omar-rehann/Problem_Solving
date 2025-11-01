/*🔹 Problem: Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

A palindrome number is the same when read forward and backward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false

Example


*/
function reverseintegr(x) {
    let test, result;
    if (x > 0) {
        test = Array.from(String(x)).reverse().join("");
        result = Number(test);
    } else {
        test = Array.from(String(-x)).reverse().join("");
        result = "-" + test;
    }
    return result;
}
console.log(reverseintegr(-123))