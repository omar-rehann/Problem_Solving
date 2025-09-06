/*
Problem Statement:
Problem Statement:

Write a function called applyOperator that processes an array of integers. The function should first filter the array to keep only the even numbers, and then transform the filtered numbers by multiplying each of them by 10. Return the resulting array.

*/

function applyopreator(arr) {
    let test = arr.filter(function(e) {
        return e % 2 == 0;
    }).map(function(e) {
        return e * 10
    });
    return test;
}
console.log(applyopreator([1, 2, 3, 4, 5]))