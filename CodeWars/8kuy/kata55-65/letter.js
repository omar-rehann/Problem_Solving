/*

🧠 Problem Title: Half and Round Down

❓ Problem Statement:  
Write a function that takes a number as input, divides it by 2, and returns the result rounded down to the nearest integer.

📥 Input:  
- A number `n` (can be integer or float).

📤 Output:  
- An integer representing the floor of `n / 2`.

📌 Example:  
- Input: 6.7  
  Output: 3  
- Input: 10  
  Output: 5

*/
function letters(number) {
    let test = parseInt(number);
    let result = test * 0.5;
    return parseInt(result);
}
console.log(letters(6.7))