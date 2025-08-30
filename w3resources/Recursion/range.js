/*

Range of Integers Using Recursion

Write a JavaScript program to get integers in the range (x, y) using recursion.

Example : range(2, 9)

Expected Output : [3, 4, 5, 6, 7, 8]

*/
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
console.log(range(2, 9))