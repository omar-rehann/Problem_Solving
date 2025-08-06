/*
🔍 Problem: Find the Smallest Number in an Array

Description:  
Write a function named `smallest` that takes an array of numbers as input and returns the **smallest value** in the array.

Requirements:
- Use the `reduce` method to compare elements.
- Return the smallest number found.

Function Signature:
function smallest(arr)

Example:
smallest([1, 2, 2]); // ➞ 1  
smallest([5, 3, 9, 1]); // ➞ 1  
smallest([10]); // ➞ 10

Constraints:
- The array will contain at least one number.
- All elements will be valid numbers.

*/
function smallest(arr) {
    let test = Array.from(arr);
    let result = test.reduce(function(one, two) {
        return one < two ? one : two
    });
    return result;
}
console.log(smallest([1, 2, 2]))