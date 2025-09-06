/*
Problem Statement:

You are given an array of numbers. Write a function called applyOperator that takes an array as input and returns a new array where each element is the result of applying a mathematical operation to the corresponding element in the input array.

Function to Implement:

*/

function applyopreator(arr) {
    let test = arr.map(function(e) {
        return e + e;
    });
    return test;
}
console.log(applyopreator([1, 2, 3, 4, 5]))