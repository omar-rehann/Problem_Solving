/*
The problem with the function is that it removes duplicates but does not preserve the original order of the first occurrences in all cases.


*/
function duplicate(array) {
    let test = Array.from(array);
    let result = [...new Set(test)];
    return result;
}
console.log(duplicate([1, 1, 1, 1, 1, 2, 3, 4, 5, 6]))