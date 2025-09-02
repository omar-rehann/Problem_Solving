/*

Problem Statement:
Write a function called rev that takes a string of words 
separated by spaces and returns an
array with the words in reverse order.

*/

function rev(str) {
    let test = str.split(" ").reverse();
    return test;
}
console.log(rev("omar nasser ali hassan"))