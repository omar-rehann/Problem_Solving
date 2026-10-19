/*
Problem 1: Stringy Strings
Description: Write a function stringy that takes a size parameter and returns a string of alternating '1' and '0', always starting with '1'.

Examples:

size = 6 → '101010'

size = 4 → '1010'

size = 12 → '101010101010'


*/
function stringy(size) {
    let result = '';
    for (let i = 0; i < size; i++) {
        // Even index → '1', odd index → '0'
        result += (i % 2 === 0) ? '1' : '0';
    }
    return result;
}