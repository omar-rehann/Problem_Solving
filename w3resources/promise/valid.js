/*
Create a Promise that rejects if the input number is less than 10 and returns "Too Small".
Otherwise, it resolves with "Valid Number".

*/

function check(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve("Sucsses Check Numner ")
        } else {
            reject("Not Invalid Number I Want To Number Great Than 10")
        }
    })
}
check(16).then(
    (resolve) => console.log(" Sucsses Action Function"),
    (reject) => console.log("Try Agin")
)