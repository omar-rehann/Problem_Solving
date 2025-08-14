/*

Given an array of ones and zeroes, convert the equivalent binary 
value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
*/
function binaryArray(array) {
    let test = Array.from(array).reverse();
    let result = test.map(function(e, index) {
        return e * Math.pow(2, index);
    }).reduce(function(one, two) {
        return one + two;
    }, 0);
    return result;
}
console.log(binaryArray([0, 0, 1, 0])); // 2

console.log(binaryArray([0, 0, 1, 0]))