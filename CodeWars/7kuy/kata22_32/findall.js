/*

Given an array (a list in Python) of integers and an integer n, 
find all occurrences of n in the given array and return another
array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.


*/


function findAll(array, n) {
    let test = Array.from(array);
    let z = [];
    for (let i = 0; i <= array.length; i++) {
        if (test[i] === n) {
            z.push(i);
        }
    }
    return z;
}
console.log(findAll([5, 1, 2, 3, 4, 5], 5))