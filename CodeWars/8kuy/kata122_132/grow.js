/*

The grow function you've provided is designed to
calculate the product of all numbers in an array.
It correctly uses the reduce method for this purpose.

*/
function grow(x) {
    let test = Array.from(x);
    let result = test.reduce(function(one, two) {
        return one * two;
    });
    return result;
}
console.log(grow([1, 2, 3, 4]))