/*

Problem Statement:
Write a function called rever that takes a string 
as input and returns the 
reversed version of that string.

*/


function rever(str) {
    let test = Array.from(str);
    let result = test.reverse().join("");
    return result;
}
console.log(rever("omar"))