/*
Sure! Here's the problem statement in English:

Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

Examples:
- Input: nums = [2, 7, 11, 15], target = 9
  - Output: [0, 1]
  - Because nums[0] + nums[1] = 2 + 7 = 9, we return [0, 1].
- Input: nums = [3, 2, 4], target = 6
  - Output: [1, 2]
  - Because nums[1] + nums[2] = 2 + 4 = 6, we return [1, 2].
*/
function twosum(arr, target) {
    let test = Array.from(arr);
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            if (test[i] + test[j] === target) {
                return [test[i], test[j]]
            }
        }
        // return false
    }
    return false
}
console.log(twosum([1, 2, 3, 4, 5], 44))