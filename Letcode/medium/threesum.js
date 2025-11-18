/*

The Three Sum Problem Statement
Problem:

Given an integer array nums, return all the unique triplets [a, b, c]
in the array such that their sum equals zero:


*/


function threesum(arr) {
    let test = Array.from(arr).sort((a, b) => a - b);
    let index = 0;
    let left = index + 1;
    let right = test.length - 1;
    for (let i = 0; i < test.length; i++) {
        let sum = index + test[left] + test[right];
        if (sum < 0) {
            ++left
        } else if (sum > 0) {
            --right;
        } else {
            return [index, test[left], test[right]]
        }
    }

}
console.log(threesum([-1, 0, 1, 2, -1, 4]))