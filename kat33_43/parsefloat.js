/*
Write function parseF which takes an input and returns a number or null if conversion is not possible.
 The input can be one of many different types so be aware.
*/
function parseF(s) {
    let test = parseFloat(s);
    return isNaN(test) ? null : test;
}

console.log(parseF("hello")); // null
console.log(parseF("3.14")); // 3.14
console.log(parseF("0")); // 0