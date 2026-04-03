/*
I would like to be able to pass an array with two elements to my swapValues function to swap the values.
*/
function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}
let myArray = [2, 1];
swapValues(myArray);
console.log(myArray);