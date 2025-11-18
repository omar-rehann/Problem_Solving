/*
 Find the Duplicate Number
Medium
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.
Example 1:
Input: nums = [1,3,4,2,2]
Output: 2
Example 2:
Input: nums = [3,1,3,4,2]
Output: 3
*/

function dublicate(arr) {
    let test = Array.from(arr);
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            if (test[i] === test[j]) {
                return test[i]
            }
        }
    }
}
console.log(dublicate([1, 3, 4, 2, 2]))