/**
 * Create a function called count that takes an array of numbers.
 * It should return an array with two values:
 *  - The count of positive numbers.
 *  - The sum of negative numbers.
 *
 * Example:
 * count([1,2,3,4,5,6,7,8,9,-1,-2,-3]) => [9, -6]
 */

function count(input) {
    let test = Array.from(input);
    let one = test.filter(function(e) {
        return e > 0 ? e : ""
    });
    let two = test.filter(function(e) {
        return e < 0 ? e : ""
    }).reduce(function(one, two) {
        return one + two;
    })
    let final = [one.length, two];
    return final
}
console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3]))