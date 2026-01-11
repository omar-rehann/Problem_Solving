/*
Problem: Find Peak Element

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element and return its index.

If the array contains multiple peak elements, return the index of any one of them.

You may imagine that:

nums[-1] = -∞

nums[n] = -∞

In other words, an element is always considered greater than its neighbors if it is at the boundary of the array and greater than its only neighbor.



*/
function peakelement(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {

        // أول عنصر
        if (i === 0 && arr[0] > arr[1]) {
            return 0;
        }

        // آخر عنصر
        if (i === arr.length - 1 && arr[i] > arr[i - 1]) {
            return i;
        }

        // عنصر في النص
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return i;
        }
    }
}
console.log(peakelement([5, 1, 1]));