/*
🧩 Problem: Create a Number Sequence

Description:  
Write a function named `loop` that takes a non-negative integer `number` as input and returns an array containing all integers starting from `0` up to and including `number`.

Requirements:
- Use a loop to generate the sequence.
- The output array should be in ascending order.

Function Signature:
function loop(number)

Example:
loop(5); // ➞ [0, 1, 2, 3, 4, 5]
loop(0); // ➞ [0]

Constraints:
- 0 ≤ number ≤ 1000
- Input will always be a non-negative integer.

*/
function loop(number) {
    let result = [];
    for (let i = 0; i <= number; i++) {
        result.push(i);
    }
    return result;
}
console.log(loop(20));