/*
🧠 Problem Title: Convert String to Uppercase

❓ Problem Statement:  
Write a function that takes a string and returns a new string with all characters converted to uppercase.

📥 Input:  
- A string `str` containing lowercase or mixed-case letters.

📤 Output:  
- A string with all characters in uppercase.

📌 Example:  
- Input: "omar"  
  Output: "OMAR"  
- Input: "Hello World"  
  Output: "HELLO WORLD"

*/
function upper_case(str) {
    let test = Array.from(str);
    let result = test.map(function(e) {
        return e.toUpperCase();
    }).join("")
    return result;
}
console.log(upper_case("omar"))