/*

Problem Description
The problem this code solves is to create a new string by repeating a given input string a specified number of times.

Input:

str: A string that needs to be repeated.

n: An integer representing the number of times the string should be repeated.

Output:

A new string that consists of the original str concatenated n times.


*/
function omarrepeat(str, n) {
    return str.repeat(n);
}

console.log(omarrepeat("omar", 3));