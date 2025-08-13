/*

Check Uppercase First

Write a JavaScript program to test whether
the first character of a string is uppercase or not.


*/


function check(string) {
    let regex = /[A-Z]\w+/;
    let result = string.match(regex);
    if (result) {
        return true;
    } else {
        return false;
    }
}
console.log(check("ahmed"))