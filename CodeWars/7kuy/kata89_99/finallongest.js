/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits,
return the first one in the array.


*/
function findLongest(array) {
    let test = Array.from(array);
    let result = test.reduce(function(one, two) {
        if (String(one).length > String(two).length) {
            return +one;
        } else if (String(two).length > String(one).length) {
            return +two;
        } else if (String(one).length === String(two).length) {
            return +one
        } else {
            return +two;
        }
    })
    return result;
}
console.log(findLongest([77, 88, 99]));