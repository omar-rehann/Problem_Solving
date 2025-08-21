/*
Stack Operations
Write a JavaScript program to implement a stack
with push and pop operations. 
Find the top element of the stack and 
check if it is empty or not.
*/
let stack = [];
// push 
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack);
// top
console.log(stack[stack.length - 1])
    // bottm
console.log(stack[0]);
//pop
stack.pop();
stack.pop();
stack.pop();
console.log(stack)