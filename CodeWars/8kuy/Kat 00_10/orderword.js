// four problem 
/*
The problem is to create a function that takes a string of words, where each word contains a single number (from 1 to 9), and sorts the words based on the number embedded in each word. The output should be a string with the words in the correct order, separated by spaces. If the input string is empty, the function should return an empty string.

**Example:**
- Input: `"is2 Thi1s T4est 3a"`
- Output: `"Thi1s is2 3a T4est"`
- Input: `""`
- Output: `""`

**Constraints:**
- Each word contains exactly one number (a single digit from 1 to 9).
- The numbers in the words are unique (no two words have the same number).
- The input string contains words separated by spaces.
- The function should return the words sorted in ascending order based on the numbers they contain.

*/
function order(words) {
    return words.split(' ')
        .sort((a, b) => {
            const numA = parseInt(a.match(/\d+/)[0]);
            const numB = parseInt(b.match(/\d+/)[0]);
            return numA - numB;
        })
        .join(' ');
}
console.log(order("is2 Thi1s T4est 3a")); // Output: "Thi1s is2 3a T4est"