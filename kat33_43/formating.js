/*
🔢 Problem: Format a Number to Two Decimal Places

Description:  
Write a function named `formating` that takes a number `n` as input and returns a string representing the number rounded to **two decimal places**.

Requirements:
- Use the `.toFixed(2)` method to format the number.
- Return the result as a string.

Function Signature:
function formating(n)

Example:
formating(5.5589); // ➞ "5.56"
formating(3);      // ➞ "3.00"
formating(7.1);    // ➞ "7.10"

Constraints:
- Input will always be a valid number.

*/
function formating(n) {
    let test = n.toFixed(2);
    return test;
}
console.log(formating(5.5589))