/*

nd Elements Larger Than Number
Write a JavaScript function that returns array elements larger than a number.
*/
function larger(arr) {
    let convert = Array.from(arr);
    let one = convert.reduce(function(one, two) {
        return one > two ? one : two
    })
    return one;
}
console.log(larger([10, 2, 1, 3, 4, 7]))