/*
Array Summation Calculator with Visualization
I'll create a complete web application that calculates the sum of an array and visualizes the process.


*/

function summtion(array) {
    let test = Array.from(array);
    let result = test.reduce(function(one, two) {
        return one + two;
    });
    return result;
}
console.log(summtion([1, 2, 3, 4, 5, 6]))