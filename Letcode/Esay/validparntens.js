/*Problem: Valid Parentheses

Description:
Given a string s containing just
the characters '(', ')', '{', '}', '[', and ']', 
determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets
*/

function validparenteses(str) {
    let left = [];
    let right = [];
    let test = Array.from(str);
    let result = test.map(function(e) {
        if (e === "("
            e === "["
            e === "{") {
            left.push(e)
        } else if (e === ")"
            e === "]"
            e === "}") {
            right.push(e)
        }
    });
    if (left.length === right.length) {
        return true
    } else {
        return false;
    }
}
console.log(validparenteses("()"))