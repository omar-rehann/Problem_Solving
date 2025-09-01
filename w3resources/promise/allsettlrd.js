/*

Promise.allSettled() Example:

5. Write a JavaScript program that takes an array of Promises
and logs both resolved and rejected results using Promise.allSettled().

*/
onepromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 second");
        }, 2000)
    }),
    twopromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3 second");
        }, 3000)
    }),
    threepromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("4 second");
        }, 4000)
    })
Promise.allSettled([onepromise, twopromise, threepromise]).then(
    (resolvevalue) => console.log(resolvevalue),
    (rejectvalue) => console.log(rejectvalue)
)