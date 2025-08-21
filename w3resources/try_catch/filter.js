/*
The provided list_filter function aims to filter an array,
returning a new array containing only the numeric values.
The current implementation uses !isNaN(e) to check if an element 
is a number.
*/
function list_filter(arr) {
    try {
        let test = Array.from(arr);
        let result = test.filter(function(e) {
            if (isNaN(e)) {
                throw new Error("Invalid Input Please Try Again");
            }
            return true; // keep only valid numbers
        });
        return result;
    } catch (error) {
        return error.message;
    }
}

console.log(list_filter([1, 2, 3, 5]));