/*
Sort Stack Descending
Write a JavaScript program to sort the elements of a given 
stack in descending order
*/
let stack = [];
stack.push(40);
stack.push(30);
stack.push(50);
stack.push(20);
stack.push(10);
console.log(stack);
// from small to large
console.log(stack.sort())
    // from large to small
console.log(stack.sort((a, b) => b - a))