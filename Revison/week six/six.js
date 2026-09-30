/*

Write a function that checks if a given string (case insensitive) is a palindrome.   
*/
function palindrome(x) {
    return x.join("").toLowerCase() === x.reverse().join("").toLowerCase()
}