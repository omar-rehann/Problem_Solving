/*

4. Is n divisible by x and y?Instructions:
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are strictly positive numbers.
Examples:
n = 3, x = 1, y = 3 => true because
n = 12, x = 2, y = 6 => true because
n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
n = 12, x = 7, y = 5 => false because 12 is neither divisible by 7 nor 5

*/
function divisible(x, y) {
    return x % y === 0 || y % x === 0
}