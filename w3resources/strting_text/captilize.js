/*
Camelize String

Write a JavaScript function to convert a string into camel case.

Test Data :

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
*/

function camelcase(str) {
    let test = Array.from(str);
    let result = test.map(function(e) {
        return e.toUpperCase()
    });
    return result.join('');
}

console.log(camelcase("AaBbc"));