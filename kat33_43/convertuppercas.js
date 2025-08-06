/*

Write a function which converts the input string to uppercase.
*/
function makeUpperCase(str) {
    let test = Array.from(str);
    let result = test.map(function(e) {
        return e.toUpperCase();
    }).join("");
    return result;
}
console.log(makeUpperCase("omar"))