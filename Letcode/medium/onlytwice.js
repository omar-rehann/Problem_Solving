/*
# 80. Remove Duplicates from Sorted Array II

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.

The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.

More formally:

* If there are k elements after removing the duplicates,
* Then the first k elements of nums should hold the final result.
* It does not matter what you leave beyond the first k elements.
* Return k.
*/

function onlytwice(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 2]) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}
console.log(onlytwice([1, 1, 1, 2, 2, 3]))