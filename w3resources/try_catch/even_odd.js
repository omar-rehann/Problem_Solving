/*
Check Even or Odd

Write a JavaScript program to check whether
a number is even or not.
*/
function check(number) {
    try {
        if (number < 0) {
            throw new Error("Invalid Number")
        } else if (number % 2 == 0) {
            return "Even number"
        } else {
            return "Odd Number"
        }
    } catch (eror) {
        return eror.message;
    }
}
console.log(check(7))
    /*
    Check Even or Odd

    Write a JavaScript program to check whether
    a number is even or not.
    */
function check(number) {
    try {
        if (number < 0) {
            throw new Error("Invalid Number")
        } else if (number % 2 == 0) {
            return "Even number"
        } else {
            return "Odd Number"
        }
    } catch (eror) {
        return eror.message;
    }
}
console.log(check(7))