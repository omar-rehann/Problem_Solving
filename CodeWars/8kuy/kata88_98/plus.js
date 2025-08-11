/*
  Problem: Write a function called "plus" that takes an array of numbers and returns a new array where each number is doubled.

  For example:
  - If the input is [1, 2, 3], the output should be [2, 4, 6].
  - If the input is [10, 20], the output should be [20, 40].
*/

function plus(arr) {
    let test = Array.from(arr);
    let result = test.map(function(e) {
        return e + e;
    });
    return result;
};
console.log(plus([1, 2, 3])) // Output: [2, 4, 6]