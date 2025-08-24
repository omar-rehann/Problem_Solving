/*

Check Element in Stack

Write a JavaScript program
to implement a stack that checks if a given element 
is present or not in the stack.
*/

function check(st, el) {
    let test = Array.from(st);
    let result = test.reduce(function(e) {
        return e == el ? true : false;
    })
    return result;
}
console.log(check([1, 2, 3, 4, 5], 1))