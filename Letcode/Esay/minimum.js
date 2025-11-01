/*

Problem: Find Minimum in Rotated Sorted Array

Given an array nums that was originally sorted in ascending order and then rotated at an unknown pivot, find and return the minimum element in the array.

You may assume that the array does not contain duplicate elements.
*/
function find_min(arr) {
    let test = Math.min(...arr)
    return test;
}
console.log(find_min([2, 3, 4, 5, 6, 1, 0]))