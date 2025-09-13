/*
Description:
Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.

*/

function nthSmallest(arr, pos) {
    let test = Array.from(arr);
    let result = test.sort((a, b) => a - b)
    return result[pos - 1];
}
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3))