/*
The problem this code solves is to
find the maximum (largest) 
number within a given array of numbers.
*/

let nums = [10, -20, 300, 50, 100, -50];
// one method
let test = Math.max(...nums);
console.log(test)

// two method
function maxnumber(arr) {
    let test = Array.from(arr);
    let result = test.sort((a, b) => a - b);
    return result[result.length - 1];
}
console.log(maxnumber(nums))
    // third number
function maxnumber(arr) {
    let test = Array.from(arr);
    let result = test.reduce(function(one, two) {
        return one > two ? one : two;
    });
    return result
}
console.log(maxnumber(nums))