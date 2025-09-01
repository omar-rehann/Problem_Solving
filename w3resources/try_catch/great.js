/*


Write a function great(num) that checks whether a number
is greater than zero.

The function should return a Promise.

If the number is greater than zero, 
the promise should resolve with the message:
"Success: the number is greater than zero".

If the number is less than or equal to zero, the promise should reject
with the message:
"Invalid number".

Use .then() to handle the resolved value and .catch()
or the second parameter of .then() to handle the rejected value.

*/


function great(num) {
    try {
        return new Promise((resolve, reject) => {
            if (num > 0) {
                resolve("Sucsses the number Graet Than zero")
            } else {
                reject("Not Vladtion Number")
            }
        });
    } catch (eror) {
        return eror.message
    }
}
great(5).then(
    (resolvevalue) => console.log(resolvevalue),
    (rejectvalue) => console.log(rejectvalue)
)