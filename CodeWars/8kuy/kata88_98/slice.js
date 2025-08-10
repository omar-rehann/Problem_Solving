/*
🧠 Problem Statement: Extract Parts of a Filename
Objective:
Write a program that extracts the name and extension from a filename string using the slice() method.
Given:
A string variable fileName containing a filename in the format "Name.Extension".
Instructions:
Use the slice() method to:
- Extract the name part (before the dot).
- Extract the extension part (after the dot).


*/
let fileName = "Elzero.php";
console.log(fileName.slice(0, 6));
console.log("\n");
console.log(fileName.slice(7))
    // Elzero
    // php