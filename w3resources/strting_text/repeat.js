/*
Repeat String

Write a JavaScript function to concatenate
a given string n times (default is 1).

Test Data :

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
*/

function repeat(str, number) {
    let test = str.repeat(number);
    return test;
}

console.log(repeat("omar", 3));