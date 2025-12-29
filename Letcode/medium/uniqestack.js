/*
Problem Statement
Given a string or array of characters, split it into substrings such that:
- Each substring contains unique characters (no duplicates inside).
- When a duplicate character is encountered, the current substring ends, and a new substring begins starting with that duplicate.
- Return all substrings as an array.



*/

function uniquesubstring(arr) {
    let test = Array.from(arr);
    let stack = [];
    let result = [];

    for (let i = 0; i < test.length; i++) {

        if (!stack.includes(test[i])) {
            stack.push(test[i]);

        } else {

            result.push([...stack]); // نخزن stack الحالي
            stack = []; // نبدأ stack جديد
            stack.push(test[i]);
        }
    }
    if (stack.length > 0) {
        result.push([...stack]);
    }

    return result;
}

console.log(uniquesubstring("abc"));