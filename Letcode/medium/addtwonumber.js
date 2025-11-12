/*
Question:
Write a function that takes two arrays of numbers and returns a new array where each element is the sum of the elements at the same index in the two input arrays.

Example:
Input: [1, 2, 3], [4, 5, 6]
Output: [5, 7, 9]

*/
function addtwonumber(arr1, arr2) {
    let one = Array.from(arr1);
    let two = Array.from(arr2);
    let result = [];
    for (let i = 0; i < one.length || i < two.length; i++) {
        let x = one[i] || 0;
        let y = two[i] || 0;
        let sumtion = x + y;
        result.push(sumtion)
    }
    return result
}
console.log(addtwonumber([2, 4, 3], [5, 6, 4]))