/*

Write a function that checks if a given string (case insensitive) is a palindrome (https://en.wikipedia.org/wiki/Palindrome).
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/
function isPalindrome(x) {
    let test = Array.from(x);
    let one = test.map(function(e) {
        return e.toLowerCase();
    }).join("");
    let two = test.map(function(e) {
        return e.toLowerCase();
    }).reverse().join("");
    if (one === two) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("Abba"))