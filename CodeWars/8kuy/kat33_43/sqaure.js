/*
🧮 Problem: Sum of Self-Powered Elements

Description:  
Write a function named `sqaure` that takes an array of numbers as input.  
Each number in the array should be raised to the power of itself (i.e., `e ** e`), and the function should return the **sum** of all these results.

Requirements:
- Use `map` to transform each element to `e ** e`.
- Use `reduce` to calculate the total sum.
- Return the final result.

Function Signature:
function sqaure(arr)

Example:
sqaure([1, 2, 2]); // ➞ 1 + 4 + 4 = 9
sqaure([3, 1]);    // ➞ 27 + 1 = 28

Constraints:
- All elements in the array will be non-negative integers.

*/
function sqaure(arr) {
    let test = Array.from(arr);
    let result = test.map(function(e) {
        return e ** e;
    }).reduce(function(one, two) {
        return one + two
    });
    return result;
}
console.log(sqaure([1, 2, 2]))