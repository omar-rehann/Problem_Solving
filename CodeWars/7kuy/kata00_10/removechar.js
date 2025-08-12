/*
  Problem: Remove Character at a Specific Index

  Write a JavaScript function named solve that takes two arguments:
  - s: A string.
  - k: An integer representing an index.

  The function should return a new string that is identical to the input string s,
  but with the character at the index k removed.

  Examples:
  - solve('abracadabra', 1) should return 'aradabra' (removes 'b' at index 1).
  - solve('hello', 0) should return 'ello' (removes 'h' at index 0).
  - solve('world', 4) should return 'worl' (removes 'd' at index 4).
  - solve('test', 10) (if k is out of bounds, the filter will simply keep all characters)
*/
function solve(s, k) {
    let test = Array.from(s);
    let result = test.filter(function(e, i) {
        return i === k ? "" : e; // If index matches k, return empty string (effectively remove); otherwise, keep the character.
    }).join("");
    return result;
}
console.log(solve('abracadabra', 1));