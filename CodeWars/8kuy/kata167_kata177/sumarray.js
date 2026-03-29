/*

Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.


*/
function sumArray(array) {
    if (!array || array.length <= 2) return 0;

    let sorted = [...array].sort((a, b) => a - b);

    let result = sorted.slice(1, sorted.length - 1).reduce((sum, num) => sum + num, 0);

    return result;
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([1, 1, 11, 2, 3]));
console.log(sumArray([]));
console.log(sumArray(null));
console.log(sumArray([5]));
console.log(sumArray([]))