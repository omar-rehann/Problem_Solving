/*
Problem: Add by X
Description:
Write a function createAdder that takes an integer x as input.
It should return a new function that takes another integer y, and returns the sum of x and y.
*/
function clouser(x) {
    let result;
    let frist = x;

    function call(y) {
        let second = y;
        result = frist + second;
        return result
    }
    return call;
}
let add = clouser(5);
console.log(add(2));