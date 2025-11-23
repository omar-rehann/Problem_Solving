/*
Medium
Suppose an array of length n is sorted in ascending order and then rotated between 1 and n times.  
For example, the array nums = [0,1,2,4,5,6,7] might become:
- [4,5,6,7,0,1,2] if it was rotated 4 times.  
- [0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], ..., a[n-1]] one time results in [a[n-1], a[0], a[1], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
Example:
Input: nums = [3,4,5,1,2]  
Output: 1  
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
*/
function minarray(params) {
    let test = Math.min(...params);
    return test;
}
console.log(minarray([2, 5, 8, 1, 9, 1, 100, 11]))