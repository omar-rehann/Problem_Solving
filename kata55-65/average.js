/*
🧠 Problem Title: Integer Average of an Array

❓ Problem Statement:  
Write a function that takes an array of numbers and returns the average value, rounded down to the nearest integer.

📥 Input:  
- An array `arr` of integers.

📤 Output:  
- An integer representing the floor of the average of the array elements.

📌 Example:  
- Input: [1, 2, 3, 4]  
  Output: 2  
- Input: [10, 20, 30]  
  Output: 20
*/
function findaverage(array) {
    let test = Array.from(array);
    let len = test.length;
    let result = test.reduce(function(one, two) {
        return one + two;
    })
    return parseInt(result / len);
}
console.log(findaverage([1, 2, 3, 4]))