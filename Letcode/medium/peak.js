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
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(peakelement([1, 2, 3, 1, 1])); // 0