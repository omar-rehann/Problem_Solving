/*
Sort an Array

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions,
in O(n log n) time complexity and with the smallest space complexity possible

*/
function sortedarray(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...sortedarray(left), pivot, ...sortedarray(right)];
}
console.log(sortedarray([2, 3, 5, 0, 1]));