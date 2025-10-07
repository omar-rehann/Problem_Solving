/*
Another Kata testing whether all elements of an array are square numbers, although this time the array can be a multidimensional array with any number of dimensions.

Your task - Write a function that checks whether all elements in a multidimensional array are square numbers. The function should be able to take any number of array elements and any number of dimensions.

Your function should return true if all elements are square numbers and false if not.

An entirely empty array should return undefined/NULL depending on the language you are completing this Kata in.

You can assume that all array elements will be positive integers.
*/
var isSquare = function(arr) {
    if (arr.length == 0) return undefined;
    let test = Array.from(arr).flat(Infinity);
    let result = test.every(function(number) {

        let friststep = Math.sqrt(number);
        if (Number.isInteger(friststep)) {
            if (friststep * friststep == number) {
                return true
            } else {
                return false;
            }
        } else {
            return false
        }
    })
    return result;
}
console.log(isSquare([1, 4, 9, 16, 25]));