/*

2. Exclamation marks series #1: Remove an exclamation mark from the end of string
Question:  
Remove a single exclamation mark from the end of a string if it ends with one.

Examples:

remove("Hi!") → "Hi"

remove("Hi!!!") → "Hi!!"

remove("!Hi") → "!Hi"

remove("Hi! Hi!") → "Hi! Hi"

*/
function remove(string) {
    if (string.endsWith('!')) {
        return string.slice(0, -1);
    }
    return string;
}