/*

✂️ Problem: Remove First and Last Characters

Description:  
Write a function named `remove_f_L` that takes a string `s` as input and returns a new string with the **first and last characters removed**.

Requirements:
- Convert the string to an array of characters.
- Use `slice(1, -1)` to remove the first and last characters.
- Return the result as a string.

Function Signature:
function remove_f_L(s)

Example:
remove_f_L("omar"); // ➞ "ma"  
remove_f_L("hello"); // ➞ "ell"  
remove_f_L("ab"); // ➞ "" (empty string)

Constraints:
- The input string will contain at least two characters.

*/
function remove_f_L(s) {
    let test = Array.from(s);
    let result = test.slice(1, -1).join("");
    return result;
}
console.log(remove_f_L("omar"))