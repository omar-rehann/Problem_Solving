/*
Max & Min in Queue

Write a JavaScript program to find the maximum and minimum
elements in a Queue.

Click me to see the solution

*/
let queue = [];
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);
queue.push(4);
// Min
console.log(Math.min(...queue));
// max
console.lof(Math.max(...queue))