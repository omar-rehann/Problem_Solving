/*

Problem: Remove Element
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

*/
function remove(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            arr.splice(i, 1);
            i--
        }
    }
    return arr.length;
}
console.log(remove([1, 2, 2, 2, 3, 4, 5, 6], 2))