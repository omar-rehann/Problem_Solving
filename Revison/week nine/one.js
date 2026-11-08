/*
Problem 1: Reverse List Order

Description: Write a function that takes an array (list) and returns a new array with the elements in reverse order.

Examples:

[1, 2, 3, 4] → [4, 3, 2, 1]
[9, 2, 0, 7] → [7, 0, 2, 9]


*/
function reverseList(list) {
    return [...list].reverse();
}

// Arrow function version
const reverseList = list => [...list].reverse();