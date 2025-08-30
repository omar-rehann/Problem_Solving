/*
Sum of Array Elements

Write a JavaScript program to compute the sum
of an array of integers.

Example : var array = [1, 2, 3, 4, 5, 6]

Expected Output : 21

*/
function sum(arr) {
    let test = Array.from(arr);
    let result = test.reduce(function(one, two) {
        return one + two;
    });
    return result;
}
console.log(sum([1, 2, 3, 4, 5, 7]))