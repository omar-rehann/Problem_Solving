/*

Problem Statement:

You are given two promises: promise1 and promise2. promise1 resolves with the value 3, and promise2 resolves with the value 5. Using Promise.all(), wait for both promises to resolve, then calculate and log the sum of their resolved values.


*/


let promise1 = new Promise((resolve, reject) => {
    resolve(3)
});
let promise2 = new Promise((resolve, reject) => {
    resolve(5);
})
let test = Promise.all([promise1, promise2]);
test.then(
    (resolve) => console.log(resolve[0] + resolve[1])
)