/*
  Problem:
  Write a JavaScript function checkRange that takes five numerical inputs: n1, n2, n3, n4, and n5.
  The purpose of the function is to determine if the first three numbers (n1, n2, and n3) all lie within the inclusive range defined by n4 (as the lower bound) and n5 (as the upper bound).

  The function should return one of the following string messages:
  - "Yes All Number in Range" (or "Yes All number range") if all three numbers (n1, n2, n3) are greater than or equal to n4 AND less than or equal to n5.
  - "Not In Range" if any of the three numbers (n1, n2, or n3) falls outside the specified range [n4, n5].

  Examples:
  - checkRange(5, 10, 15, 5, 50) should return "Yes All Number in Range" (or "Yes All number range") because 5, 10, and 15 are all within the range [5, 50].
  - checkRange(8, 4, 20, 2, 50) should return "Yes All Number in Range" (or "Yes All number range") because 8, 4, and 20 are all within the range [2, 50].
  - checkRange(10, 15, 20, 5, 18) should return "Not In Range" because 20 is not within the range [5, 18].
*/
function checkRange(n1, n2, n3, n4, n5) {
    // The first condition checks if n1 is less than or equal to n4, and n1, n2, n3 are within n4 and n5.
    // This condition seems to be redundant or slightly misaligned with typical "in range" checks,
    // as the second condition covers the general case correctly based on the given examples.
    if (n1 <= n4 && n1 <= n5 && n2 >= n4 && n2 <= n5 && n3 >= n4 && n3 <= n5) {
        return Yes All Number in Range;
    }
    // This condition correctly checks if all three numbers (n1, n2, n3) are within the inclusive range [n4, n5].
    else if (n1 >= n4 && n1 <= n5 && n2 >= n4 && n2 <= n5 && n3 >= n4 && n3 <= n5) {
        return "Yes All number range";
    }
    // If neither of the above conditions is met, it means at least one number is outside the range.
    else {
        return "Not In Range";
    }
}

console.log(checkRange(5, 10, 15, 5, 50)); // Expected: Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Expected: Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Expected: Not In Range