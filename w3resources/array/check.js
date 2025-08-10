/*
Check Array Input
First Elements of Array

Write a JavaScript function to get the first element of 
an array. Passing the parameter 'n' will return the first 'n' 
elements of the array.

*/
function fristelement(input) {
    let test = Array.from(input);
    return test[0];
}
console.log(fristelement([
    [1, 2, 3, 4], 2, 3, 4
]))