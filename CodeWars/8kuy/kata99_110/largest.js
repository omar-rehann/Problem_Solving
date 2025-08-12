/*
  Problem: Find the Two Largest Numbers in an Array

  Given an array of numbers, write a JavaScript code snippet or function that
  identifies and extracts the two largest numbers from that array. The output
  should be an array containing these two largest numbers, in descending order.

  Example:
  Given the array [20, 100, 50, 10, 15, -20, 30],
  the expected output should be [100, 50].
*/
let nums = [20, 100, 50, 10, 15, -20, 30];
let result = nums.sort((a, b) => a - b).reverse();
console.log(result.slice(0, 2)); // Needed Output: [100, 50]