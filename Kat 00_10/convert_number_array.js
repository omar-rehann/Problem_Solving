/*

Task: Count the Sheep
Write a function countSheep that takes an array of boolean values arr representing sheep (where true means a sheep is present and false means no sheep). The function should return the total number of sheep (i.e., the count of true values) in the array.
Examples:

countSheep([true, false, true, true, false, false, true, true, true]) should return 6.
countSheep([false, false, false]) should return 0.
countSheep([true, true]) should return 2.

*/
function convert(n) {
    let test = String(n).split("").reverse();
    let result = test.map(function(e) {
        return +e;
    });
    return result;
}
console.log(convert(348597))