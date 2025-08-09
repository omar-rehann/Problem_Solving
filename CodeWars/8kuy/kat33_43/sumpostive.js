/*

Task
You get an array of numbers, return the sum of all of the positives ones.
Example
[1, -4, 7, 12] => 1+7+12=201+7+12=20
*/
function positiveSum(arr) {
    let test = Array.from(arr);
    let result = test.filter(function(e) {
        return e > 0 ? e : ""
    }).reduce(function(one, two) {
        return one + two;
    }, 0);
    return result;
}
console.log(positiveSum([1, 2, 3, 4, 5, -1, -2, -3]))