/*
Factorial Calculation
Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, 
denoted by n!, is the product of all positive integers less than or equal to n.
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

*/
function factorial(number) {
    return new Promise((resolve, reject) => {
        if (number <= 0) {
            reject("Not Found Factorial Number")
        } else {
            resolve("Succssses Found factorial number");
        }
    })
}
factorial(5).then(
    (resolve) => {
        let result = 0;
        for (let i = 1; i <= 5; i++) {
            result += i * 5;
        }
        console.log(result);
    },
    (reject) => cons.log("Not fount factoril number")
)