/*

Problem Statement:
Write a function called convert that takes two parameters: an element and a constructor function (like Object, String, Number, Boolean), and returns the element converted to the specified type by calling the constructor function on it.

*/

function convert(element, value) {
    return $ { value(element) };
}
console.log(convert(123, Object))