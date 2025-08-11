/*
Check String Input

Write a JavaScript function to check whether an 'input' is a string or not.

Test Data :

console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false


*/

function check(str) {
    if (isNaN(str)) {
        return true;
    } else {
        return false;
    }
}
console.log(check(123))