/*
Task
Your goal is to write a function that removes the first and last characters of a string. 
You're given one parameter, the original string.
Important: Your function should handle strings of any length ≥ 2 characters. 
For strings with exactly 2 characters, return an empty string.
 */
function removeChar(str) {
    if (str.length <= 2) {
        return '';
    }

    return str.slice(1, -1); // يحذف أول وآخر حرف
}

console.log(removeChar("countery")); // "ounter"
console.log(removeChar("a")); // ''
console.log(removeChar("")); // ''
console.log(removeChar("ab")); // '