/*
🧠 Problem Title: Invert Array Values

❓ Problem Statement:  
Write a function that takes an array of numbers and returns a new array where each number is inverted. That is, positive numbers become negative, and negative numbers become positive.

📥 Input:  
- An array `arr` of integers.

📤 Output:  
- A new array of integers where each element is the inverse of the corresponding input element.

📌 Example:  
- Input: [1, 2, 3, -4]  
  Output: [-1, -2, -3, 4]
*/
function invertt(array) {
    let test = Array.from(array);
    let result = test.map(function(e) {
        return e > 0 ? -e : -e;
    });
    return result;
}
console.log(invertt([1, 2, 3, -4]))