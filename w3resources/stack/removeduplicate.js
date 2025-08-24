/*

Remove Duplicates from Stack

Write a JavaScript program to remove duplicates 
from a given stack.
*/

function duplicate(st) {
    let test = Array.from(st);
    let z = [];
    for (let i = 0; i < test.length; i++) {
        if (!z.includes(test[i])) {
            z.push(test[i]);
        }
    }
    return z;
}
console.log(duplicate([1, 1, 2, 3, 4, 5]))