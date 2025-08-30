/*

Range of Integers Using Recursion

Write a JavaScript program to get integers in the range (x, y) using recursion.

Example : range(2, 9)

Expected Output : [3, 4, 5, 6, 7, 8]

*/
function range(start, end) {
    try {
        if (start >= end) {
            throw new Error("Invalid range: start must be less than end");
        }

        // Base Case
        if (end - start <= 1) {
            return [];
        } else {
            // Recursive Step
            let list = range(start, end - 1);
            list.push(end - 1);
            return list;
        }

    } catch (error) {
        return error.message;
    }
}

console.log(range(2, 9)); // [3, 4, 5, 6, 7, 8]
console.log(range(9, 2)); // Invalid range: start must be less than end