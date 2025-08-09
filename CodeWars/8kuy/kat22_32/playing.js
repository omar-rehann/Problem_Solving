/*
🎸 Problem: Are You Playing Banjo?

Description:  
Create a function named `playing` that takes a string `name` as input and returns a sentence indicating whether the person plays banjo.  
Anyone whose name starts with the letter "R" (uppercase or lowercase) is considered to be playing banjo.

Requirements:
- Check the first character of the name.
- If it starts with "R" or "r", return: "`<name> is playing banjo`"
- Otherwise, return: "`<name> is not playing banjo`"

Function Signature:
function playing(name)

Example:
playing("Rehan"); // ➞ "Rehan is playing banjo"
playing("Ali");   // ➞ "Ali is not playing banjo"

Constraints:
- The input `name` will always be a non-empty string.
 */
function playing(name) {
    let test = Array.from(name);
    let char = "R"
    if (test[0] == char.toLowerCase() || test[0] == char.toUpperCase()) {
        return ` $ { name }
        Playin Banjo`
    } else {
        return `$ { name }
        Not Playin Banjo`
    }
}
console.log(playing("Rehan"))