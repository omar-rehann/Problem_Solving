/*
The problem this code solves is to
safely retrieve an element from an array at a specified index, 
providing an error message if the index is out of bounds.


*/

function index(arr, index) {
    let test = Array.from(arr);
    try {
        if (index > test.length) {
            throw new error("Invalid index try agin")
        }
        return That is Array$ { test }
        and
        indexof element = $ { test[index] };
    } catch (error) {
        return error.message
    }

}
console.log(index([1, 2, 3, 4], 10))