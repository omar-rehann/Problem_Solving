/*
Task: Count True Values (Sheep)
Write a function countSheep that takes an array of boolean values arr as input and returns the number of true values in the array.
Examples:

countSheep([true, false, true, true, false, false, true, true, true]) should return 6.
countSheep([false, false, false]) should return 0.
countSheep([true, true, true]) should return 3.

*/
function countSheep(arr) {
    let test = Array.from(arr);
    let result = test.filter(function(e) {
        return e == false ? "" : e;
    });
    return result.length
}
console.log(countSheep([true, false, true, true, false, false, true, true, true]))