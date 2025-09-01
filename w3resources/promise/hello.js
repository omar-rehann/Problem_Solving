/*
Create a Simple Promise:
1. Write a JavaScript function that returns a Promise
that resolves with a "Hello,
World!" message after 1 second.
*/
function hello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Say Hello")
        }, 2000)
    })
}
hello().then(
    (resolvevalue) => console.log(resolvevalue)
)