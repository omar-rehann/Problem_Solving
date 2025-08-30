/*
Factorial Calculation
Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, 
denoted by n!, is the product of all positive integers less than or equal to n.
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

*/
function factorial(number) {
    let result = 0;
    try {
        if (number <= 0) {
            throw new Error("Not Fount Factorial This Number")
        } else {
            for (let i = 1; i <= number; i++) {
                result += i * number;
            }
            return result;
        }
    } catch (eror) {
        return eror.messagel
    }
}
console.log(factorial(5))