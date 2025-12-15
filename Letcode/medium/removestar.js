/*
Problem Statement
You are given a string s that contains lowercase 
letters and the character *.
In one operation, you can:
Choose a star * in the string.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the final string after all stars have been removed
*/
function removestar(string) {
    let test = Array.from(string);
    let stackk = [];
    for (let i = 0; i < test.length; i++) {
        if (test[i] !== "*") {
            stackk.push(test[i])
        } else {
            stackk.pop()
        }
    }
    return stackk;
}
console.log(removestar("ab**c*d"))