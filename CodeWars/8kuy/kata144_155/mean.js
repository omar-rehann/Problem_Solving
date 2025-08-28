/*
Your mean function correctly calculates the arithmetic
mean (average) of an array of numbers. It sums all the elements
and then divides by the count of elements. The use of parseInt at 
the end truncates any decimal part, giving you an integer result.

*/

function mean(arr) {
    let test = Array.from(arr);
    let length = test.length;
    let result = test.reduce(function(one, two) {
        return one + two;
    });
    return parseInt(result / length);
}
console.log(mean([1, 2, 3, 4, 5, 6, 7, 8]))