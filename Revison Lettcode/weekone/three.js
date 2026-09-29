/*

Problem: Count Unique Elements in an Array

Given an array of integers arr, remove all duplicate values and return the number of unique elements.

*/
function remove(arr) {
    let test = [...new Set(arr)];
    return test.length;
}

console.log(remove([1, 1, 1, 1, 2, 3, 4, 5]))