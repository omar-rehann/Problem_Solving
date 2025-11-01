/*
Problem: Palindrome Number
 use any solution 
Given an integer x, return true if x is a palindrome, 
and false otherwise.

An integer is a palindrome when it reads the same
backward as forward.


*/
function ispalindrome(number) {
    let one = Array.from(String(number));
    if (one.join("") === one.reverse().join("")) {
        return true
    } else {
        return false
    }
}
console.log(ispalindrome(10))