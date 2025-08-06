/*

Get Type of Argument
Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined
*/
function type(thing) {
    let convert = typeof thing;
    return convert
}
console.log(type(123))