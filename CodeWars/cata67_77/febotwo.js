/*

You will be given a number and your task is to return the nth fibonacci string. For example:

solve(2) = '010'
solve(3) = '01001'


*/
const solve = (n) => n === 0 ? '0' : n === 1 ? '01' : solve(n - 1) + solve(n - 2);

console.log(solve(3)); // Output: "01001"
console.log(solve(2)); // Output: "010"