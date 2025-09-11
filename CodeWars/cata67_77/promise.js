/*
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

*/

var addTwoPromises = async function(promise1, promise2) {
    let test = await Promise.all([promise1, promise2]);
    return test[0] + test[1];
};
addTwoPromises(Promise.resolve(4), Promise.resolve(4)).
then((result) => console.log(result))