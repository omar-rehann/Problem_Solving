/*
Problem Statement:
Write a function called longest that takes a string 
of words separated by spaces and returns the 
longest word in the string.


*/

function longest(word) {
    let test = word.split(" ");
    let result = test.reduce(function(one, two) {
        return one.length > two.length ? one : two;
    })
    return result;
}
console.log(longest("omar nasser ali hassan rehan"))