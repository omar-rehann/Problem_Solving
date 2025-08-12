/*
  Problem: Generate an Ascending Asterisk Pyramid

  Write a JavaScript function named pyramid that takes a single integer, number, as an argument.
  The function should print a pyramid pattern to the console, where each row consists of asterisks (*).

  The pattern should start with one asterisk on the first line, and the number of asterisks
  should increase by one in each subsequent line. The total number of lines (rows) in the pyramid
  should be equal to the input number.

  Example:
  If pyramid(3) were called, the expected output to the console would be:
  *
  **
  ***

  For console.log(pyramid(10)), the output would be a pyramid with 10 rows.
*/
function pyramid(number) {
    for (let i = 1; i <= number; i++) {
        console.log("*".repeat(i));
    }
}

console.log(pyramid(10));