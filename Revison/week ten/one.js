/*

### 1. Sum Arrays
 * Problem: Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers, return 0.
*/
function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}