/*
Problem Statement:
Write a function called boolean that takes any value as input 
and returns true if the value is strictly a boolean (true or false),
otherwise returns false.

*/

function boolean(element) {
    if (element === true || element === false) {
        return true
    } else {
        return false
    }
}
console.log(boolean(10))