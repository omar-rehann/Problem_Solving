/*

Capitalize First Letter of Each Word
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/
function sort(string) {
    let convert = string.split(" ");
    let result = convert.map(function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    })
    return result;
}
console.log(sort("omar nasser rehan"))