/*
Merge Two Queue

Write a JavaScript program to merge two Queue into one.
Click me to see the solution

*/
let queue = [];
let two_queue = [];
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);
queue.push(4);
two_queue.push(100);
two_queue.push(200);
two_queue.push(300);
two_queue.push(400);
// First queue

// Second queue

// Display original queues
console.log("First Queue:", queue);
console.log("Second Queue:", two_queue);

// Merge both queues into one
let mergedQueue = queue.concat(two_queue);

// Display merged queue
console.log("Merged Queue:", mergedQueue);