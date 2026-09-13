/*

4.   (Sum of differences in array):Your task is to sum the differences between consecutive pairs in the array in descending order.
Example:[2, 1, 10] --> 9
In descending order: [10, 2, 1]Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

*/
function sum(arr) {
    let test = arr.reduce((a, b) => {
        return a > b ? a - b : b - a;
    });
    return test
}
console.log(sum([2, 1, 10]))