/*
Problem 2: Even or Odd

Description: Write a function that takes an integer and returns "Even" if the number is even, or "Odd" if it is odd.
2 → "Even"
7 → "Odd"

*/

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Arrow function version
const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";