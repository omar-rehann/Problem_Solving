/*

Swap Case

Write a JavaScript function that takes a string 
with both lowercase and upper case letters as
a parameter. It converts upper case letters to lower case,
and lower case letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/

function swap(str) {
    let test = Array.from(str);
    let result = test.map(function(e) {
        return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
    });
    return result.join('');
}

console.log(swap("AaBbc")); // "aAbBC"

console.log(swap("AaBbc"))