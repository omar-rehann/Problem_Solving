/*


This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Examples:

* array = [1, 2, 3, 4] and N = 2, then the result is $3^2 = 9$


---
*/
function check(arr, n) {
    return Math.pow(arr[n], 2)
}
console.log(check([1, 2, 3, 4], 2))