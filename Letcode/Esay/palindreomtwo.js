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
function plandrome(x) {
    let one = Array.from(String(x)).join("");
    let two = Array.from(String(x)).reverse().join("");
    if (one === two) {
        return true
    } else {
        return false;
    }
}
console.log(plandrome(-123))