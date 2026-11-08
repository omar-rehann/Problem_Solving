/*


JavaScript Practice Problems
Problem 1: Reversed Words

Description: Write a function that takes a string and returns it with the order of its words reversed. Words are separated by a single space, with no extra spaces at the start or end.

"The greatest victory is that which requires no battle"
→ "battle no requires which that is victory greatest The"


*/
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// Arrow function version
const reverseWords = str => str.split(' ').reverse().join(' ');