/*

Problem: Isogram

Description: An isogram is a word in which no letter appears more than once. Write a function that takes a string and returns true if it is an isogram, and false otherwise. The check should be case-insensitive.

Examples:

"Dermatoglyphics" → true
"aba" → false
"moOse" → false (ignoring case, o repeats)
"" → true (an empty string has no repeated letters)

*/

// 7 kata



function isIsogram(str) {
    const lower = str.toLowerCase();
    return new Set(lower).size === lower.length;
}