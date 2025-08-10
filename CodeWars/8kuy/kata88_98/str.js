/*
🧠 Problem Statement: Prefix a String with "El"
Function Name: addEl(str)
Objective:
Write a function that ensures a given string starts with the prefix "El". If it already starts with "El", return it unchanged. If it's empty, return an empty string. Otherwise, add "El" to the beginning.
Function Signature:


*/
function addEl(str) {
    if (str == "") {
        return " ";
    } else if (str.slice(0, 2) === "El") {
        return str;
    } else {
        return El$ { str };
    }
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero