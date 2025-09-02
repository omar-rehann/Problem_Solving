/*

Problem Statement:
Write a function called swap that takes two values a and b,
swaps their values, and returns a string showing the 
swapped values in the format
"Swap Element = [swapped_a, swapped_b]".

*/

function swap(a, b) {
    let temp = b;
    b = a;
    a = temp;
    return Swap Element = [$ { a }, $ { b }];
}
console.log(swap(10, 20))