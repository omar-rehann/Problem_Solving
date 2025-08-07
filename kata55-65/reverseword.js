/*
🧠 Problem Title: Reverse a String

❓ Problem Statement:  
Write a function that takes a string and returns a new string with the characters in reverse order.

📥 Input:  
- A string `word`.

📤 Output:  
- A string with characters reversed.

📌 Example:  
- Input: "Hello world"  
  Output: "dlrow olleH"


*/
function reverseword(word) {
    let test = Array.from(word).reverse().join("");
    return test;
}
console.log(reverseword("Hello world"))