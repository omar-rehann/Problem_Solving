/*
The provided list_filter function aims to filter an array,
returning a new array containing only the numeric values.
The current implementation uses !isNaN(e) to check if an element 
is a number.
*/
function list_filter(arr) {
    let test = Array.from(arr);
    let result = test.filter(function(e) {
        return !isNaN(e);
    });
    return result;
}
console.log(list_filter([1, 2, "omar", 3, 5]))