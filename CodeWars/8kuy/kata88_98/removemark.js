/*
🧠 Problem Statement: Remove Exclamation Marks from a String
Function Name: removemark(word)
Objective:
Write a function that takes a string as input and returns a new string with all exclamation marks (!) removed.

*/
function removemark(word) {
    let test = Array.from(word);
    let result = test.filter(function(e) {
        return e == "!" ? "" : e
    }).join("");
    return result;
}
console.log(removemark('!omarr!ehan!'))