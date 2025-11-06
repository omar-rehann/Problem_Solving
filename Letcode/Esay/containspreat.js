/*
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least 
twice in the array, 
and return false if every element is distinct.
*/
function contaisrepeat(arr) {
    let test = Array.from(arr).length;
    let result = new Set([...arr]).size;
    if (test !== result) {
        return true
    } else {
        return false
    }

}
console.log(contaisrepeat([1, 2, 3, 4, 1]))