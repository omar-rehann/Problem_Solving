/*

Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
function sort(string) {
    let convert = Array.from(string).sort().join("");
    return convert
}
console.log(sort("omar"))