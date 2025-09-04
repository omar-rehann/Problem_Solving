/*
Write a function that flattens an Array of Array
objects into a flat Array.
Your function must only do one level of flattening.

*/
var flatten = function(array) {
    let test = array.flat();
    return test;
}
console.log(flatten([
    [1, 2, 3],
    ["a", "b", "c"],
    [4, 5, 6],
    [7, 8, 9]
]))