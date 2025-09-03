/*
Problem Statement:
Write a function called plandirome 
(should be palindrome) that takes a string and checks 
if it is a palindrome. A palindrome is a word that reads
the same forwards and backwards.


*/

function plandirome(str) {
    let one = str;
    let two = Array.from(str);
    let three = two.reverse().join("");
    if (one == three) {
        return true
    } else {
        return false;
    }
}
console.log(plandirome("hello"))