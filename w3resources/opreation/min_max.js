/*

Problem Statement:
Write a function called M_i that takes an array of numbers and returns a string indicating the minimum and maximum numbers in the array.

*/


function M_i(arr) {
    let test = Array.from(arr);
    let one = Math.min(...test);
    let two = Math.max(...test);
    return The Min Number $ { one }
    and Max Number$ { two }
}
console.log(M_i([1, 2, 3]))