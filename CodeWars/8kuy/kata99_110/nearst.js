/*

The Problem the Current Code Solves
The existing test variable uses the reduce method to iterate through the nums array. The callback function (one, two) => one > two ? one : two compares the current accumulated value (one) with the next element (two) and returns the larger of the two. This effectively finds the largest number in the nums array.

Input: nums = [10, 80, 85, 25, 30, 88, 15]

Operation: Find the highest value.

Output (of test): 88




*/

let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;
let test = nums.reduce(function(one, two) {
    return one > two ? one : two;
});
console.log(test);
// Your Code Here

// Closest Number Is 88