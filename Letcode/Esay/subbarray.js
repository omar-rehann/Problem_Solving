/*
Problem Description
Given an integer array nums, find the subarray with the largest sum, and return its sum.
A subarray is a contiguous non-empty sequence of elements within an array.

*/

// solve by Kadiane Algorhime
function subarray(arr) {
    if (arr.length == 0) {
        return;
    }
    let max_current = arr[0];
    let max_global = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max_current = Math.max(arr[i], arr[i] + max_current);
        if (max_current > max_global) {
            max_global = max_current
        }
    }
    return max_global
}
console.log(subarray([-2, 1. - 3, 4, -1, 2, 1, -5, 4]))