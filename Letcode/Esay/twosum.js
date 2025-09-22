/*

Problem: Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.


*/


var twosum = function(nums, target) {
    let test = Array.from(nums);
    var [a, b] = [0, 0];
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            if (test[i] + test[j] == target) {
                [a, b] = [test[i], test[j]];
                return [test[i], test[j]]
            }
        }
    }
}
console.log(twosum([1, 2, 3, 4, 3, 6], 3))