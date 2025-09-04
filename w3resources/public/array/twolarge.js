/*
The problem with this function is that it doesn't handle arrays with
duplicate maximum values correctly.
*/

function twolarge(array) {
    let test = Array.from(array);
    let result = test.sort((a, b) => a - b);
    return result[test.length - 2];
}
console.log(twolarge([1, 2, 3, 4, 5, 6]))