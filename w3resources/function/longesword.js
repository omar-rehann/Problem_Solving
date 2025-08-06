/*

Find Longest Word
Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/
function longestword(string) {
    let convert = string.split(" ");
    let result = convert.reduce(function(one, two) {
        return one.length > two.length ? one : two;
    })
    return result;
}
console.log(longestword("omar nasser rehan"))