/*
Problem:
You are given two arrays a and b. Your task is to return a new array that contains all elements from a except those that are present in b. The order of elements in a should be preserved.


*/

function arraydif(a, b) {
    let one = Array.from(a);
    let two = Array.from(b);
    let result = one.filter(function(e) {
        return !two.includes(e)
    })
    return result;
}
console.log(arraydif([1, 2, 3, 4, 8, 9], [2, 3, 4]))