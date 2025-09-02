/*

Problem Statement:
Write a function called count that takes an array containing
mixed data types and returns a string that counts how many
elements are numbers, strings, booleans,
and objects in the array.

*/

function count(arr) {
    let numbers = [];
    let strings = [];
    let booleans = [];
    let objects = [];

    arr.forEach(function(e) {
        if (typeof e === "number") {
            numbers.push(e);
        } else if (typeof e === "string") {
            strings.push(e);
        } else if (typeof e === "boolean") {
            booleans.push(e);
        } else if (typeof e === "object") {
            objects.push(e);
        }
    });

    return The Number of Number $ { numbers.length }
    and number of string $ { strings.length }
    and number of bool $ { booleans.length }
    and number of object $ { objects.length };
}