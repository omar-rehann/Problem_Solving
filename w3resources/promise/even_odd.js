/*
Check Even or Odd

Write a JavaScript program to check whether
a number is even or not.
*/
function check(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            return "Even Number"
        } else {
            reject("Odd Number")
        }
    })
};
check(5).then(
    (resolvavalue) => console.log(resolvavalue),
    (rejectvalue) => console.log(rejectvalue)
)