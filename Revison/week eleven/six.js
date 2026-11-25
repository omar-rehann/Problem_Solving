/*

Here is the problem and solution description for the "You're a square!" Codewars kata, formatted in English:
### Problem Statement
A square of squares:
You like building blocks. You especially like building blocks that form squares. And what you even like more, is to arrange them into rows of square building blocks!
However, sometimes, you can't arrange them into a square. You end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working. Wait! That's it! You just have to check if your building block is a perfect square.
Task:
Given an integral number, determine if it's a square number:
 * In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
 * The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples (Sample Tests):
 * -1 \rightarrow false (Negative numbers cannot be square numbers)
 * 0 \rightarrow true (0 = 0 \times 0)
 * 3 \rightarrow false
 * 4 \rightarrow true (4 = 2 \times 2)
 * 25 \rightarrow true (25 = 5 \times 5)
 * 26 \rightarrow false
### Solution
You can solve this efficiently in JavaScript by checking if the square root of the number (using n ** 0.5 or Math.sqrt(n)) results in a whole integer:
*/

// 7 kata
var isSquare = function(n) {
    return Number.isInteger(n ** 0.5);
};