/*
🧠 Problem Title: Unique Characters in a String

❓ Problem Statement:  
Given a string, determine whether all characters in the string are unique. Return `true` if the string contains no duplicate characters, and `false` otherwise.

📥 Input:  
- A single string `s` consisting of ASCII characters.

📤 Output:  
- A boolean value: `true` if all characters in `s` are unique, `false` otherwise.

📌 Example:  
- Input: "hello"  
  Output: false  
- Input: "world"  
  Output: true

*/
function revert(x) {
    let test = Array.from(x);
    let result = test.filter(function(e) {
        return e == " " ? "" : e;
    }).join("");
    return result;
}
console.log(revert("o mar r   e h a       n"))