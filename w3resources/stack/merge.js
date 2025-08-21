/*
Merge Two Stacks

Write a JavaScript program to merge two stacks into one.
*/
let one = [];
let two = [];
one.push(1);
one.push(2);
one.push(3);
two.push(4);
two.push(5);
two.push(6);
// concat
let result = one.concat(two);
console.log(result);