/*
Check Even or Odd

Write a JavaScript program to check whether
a number is even or not.
*/
function check(number) {
    if (number % 2 == 0) {
        return " Even Number"
    } else {
        return "Odd Number"
    }

}
console.log(check(5))