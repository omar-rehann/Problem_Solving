/*

Problem 3: (Based on the image — likely a common CodeWars problem)
If the third problem isn't fully visible, here's the solution to a very common CodeWars problem: "Is n divisible by x and y?"

Description: Write a function isDivisible(n, x, y) that returns true if n is divisible by both x and y, otherwise false.

Examples:

isDivisible(3, 3, 4) → false

isDivisible(12, 3, 4) → true

isDivisible(8, 3, 4) → false
*/
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}