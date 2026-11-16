/*
### 3. Array plus array
 * Problem: Get the sum of two arrays—actually the sum of all their elements. Each array includes only integer numbers, and the output is a number too.
 * Solution:
*/
function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);
}