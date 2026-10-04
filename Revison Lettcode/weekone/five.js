/**
Given an integer x, return true if x is a palindrome, and false otherwise.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x === +Array.from(String(x)).reverse().join("") ? true : false

};
console.log(isPalindrome(121))