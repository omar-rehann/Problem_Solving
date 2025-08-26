/*
Sort queue Descending

Write a JavaScript program to sort the elements of a given 
queue in descending order.

*/
let queue = [];
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);
queue.push(4);
// descending
queue.sort((a, b) => a - b);
console.log(queue)
    //Ascending
queue.sort((a, b) => b - a);
console.log(queue)