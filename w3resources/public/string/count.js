/*
Problem Statement:
Write a function called count that takes a string
as input and returns the number
of characters in the string.

*/


function count(str) {
    let test = Array.from(str).length;
    return test;
}
console.log(count("omar"))