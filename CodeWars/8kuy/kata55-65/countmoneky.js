/*

🧠 Problem Title: Count the Monkeys

❓ Problem Statement:  
Write a function that takes a positive integer `n` and returns an array containing all integers from `1` to `n`, inclusive.

📥 Input:  
- A positive integer `n`.

📤 Output:  
- An array of integers from `1` to `n`.

📌 Example:  
- Input: 5  
  Output: [1, 2, 3, 4, 5]  
- Input: 10  
  Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
function conutmonkey(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(i);
    }
    return result;
}
console.log(conutmonkey(10))