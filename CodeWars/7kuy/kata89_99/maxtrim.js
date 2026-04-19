/*
Task
Given an array/list of integers, find the maximum sum of 3 DISTINCT array elements.
Notes :
array size is at least 3 .
array elements can be zero or negative
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
*/
function maxTriSum(numbers) {
    let test = [...new Set(numbers.sort((a, b) => a - b))];
    let final = test.slice(-3).reduce(function(one, two) {
        return one + two;
    });
    return final;
}
console.log(maxTriSum([1, 4, 5, 1, 10, 9]))