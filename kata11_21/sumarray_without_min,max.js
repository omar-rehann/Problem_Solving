/*
Task: Sum Array Excluding Min and Max
Write a function sumArray that takes an array of numbers array as input and returns the sum of all elements in the array, excluding the smallest and largest values. If the array has fewer than 3 elements, return 0.
Examples:

sumArray([6, 2, 1, 8, 10]) should return 16 (sum of [6, 2, 8] after excluding 1 and 10).
sumArray([1, 2, 3]) should return 2 (sum of [2] after excluding 1 and 3).
sumArray([1, 2]) should return 0 (fewer than 3 elements).

*/
function sumArray(array) {
    let test = Array.from(array);
    let check_one = Math.min(...test);
    let check_two = Math.max(...test);
    let result = test.filter(function(e) {
        return e == check_one ? "" : e;
    }).map(function(e) {
        return e == check_two ? "" : e;
    }).reduce(function(one, two) {
        return one + two;
    })
    return result;
}
console.log(sumArray([6, 2, 1, 8, 10]));