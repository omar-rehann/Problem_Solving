/*

Problem Description
The problem this code solves is to extract 
all unique elements from an 
input array and return them in a sorted collection.

*/


function not_repaet(a) {
    let test = new Set(Array.from(a).sort());
    return test;
}
console.log(not_repaet([1, 1, 3, 2, 2, 4, 1, 2, 3]))