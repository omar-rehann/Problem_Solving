/**
 * @param {number[]} nums
 * @return {number}
 Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
 */
var removeDuplicates = function(nums) {
    let test = [...new Set(nums)];

    for (let i = 0; i < test.length; i++) {
        nums[i] = test[i];
    }

    return test.length;
};