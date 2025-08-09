/*
Task: Combine and Sort Unique Characters
Write a function longest that takes two strings s1 and s2 as input and returns a 
single string containing all unique characters from both strings, sorted alphabetically.

*/
function longest(s1, s2) {
    let final = [];
    let first = new Set(Array.from(s1));
    let second = new Set(Array.from(s2));
    let result = final.concat(Array.from(first), Array.from(second));
    let uniqueSorted = Array.from(new Set(result)).sort().join('');
    return uniqueSorted;
}
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
console.log(longest(a, b));