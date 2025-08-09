/*

// ❓ Problem:
// Write a function called divsible(numbers, num) that does the following:
//
// - Converts the input array 'numbers' into a new array using Array.from.
// - Initializes an empty array called result.
// - Iterates through each element in the array.
// - Checks if the element is divisible by 'num' using Number.isInteger(test[i] / num).
// - If divisible, adds the element to the result array.
// - Returns the result array after the loop.
//
// Example:
// divsible([1, 2, 3, 4, 5, 6], 2) should return [2, 4, 6]
//
// Note: The return statement must be placed outside the loop.
*/
function divsible(numbers, num) {
    let test = Array.from(numbers);
    let result = [];

    for (let i = 0; i < test.length; i++) {
        if (Number.isInteger(test[i] / num)) {
            result.push(test[i]);
        }
    }
    // يجب أن تكون جملة return خارج الحلقة
    return result;
}

console.log(divsible([1, 2, 3, 4, 5, 6], 2));