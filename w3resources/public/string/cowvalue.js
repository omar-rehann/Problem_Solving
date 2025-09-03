/*
Problem Statement:
Write a function called cowvalue that takes a 
string and returns the count of how many
vowels (specifically 'a', 'i', 'o', 'y')
are present in the string.

*/

function cowvalue(str) {
    let one = Array.from(str);
    let check = ["a", "i", "o", "y"];
    let result = one.filter(function(e) {
        return check.includes(e);
    });
    return result.length;
}
console.log(cowvalue("hello"))