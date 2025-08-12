/*
  Problem: Find the Biggest Digit in a String of Numbers

  Write a JavaScript function named checkBiggestNum that takes a single string word as an argument.
  The string will contain only digits. The function should find and return the largest digit
  within that string.

  The function should not convert the string to a number, but rather treat it as a sequence of
  individual digits.

  Examples:
  - checkBiggestNum("1500654") should return "6".
  - checkBiggestNum("8509507") should return "9".
*/
function checkBiggestNum(word) {
    let test = Array.from(word);
    let result = test.reduce(function(one, two) {
        // The comparison one > two works correctly here because the digits are strings.
        // JavaScript compares strings lexicographically, which works for single digits.
        return one > two ? one : two;
    });
    return result;
}

console.log(checkBiggestNum("1500654"));
console.log(checkBiggestNum("8509507"));