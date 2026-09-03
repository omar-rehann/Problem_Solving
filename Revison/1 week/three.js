/*
Title: Is the string uppercase?
Task:Create a method to see whether the string is ALL CAPS.
Examples (input -> output):
"c" -> False
"C" -> True

*/
function check(n) {
    return String(n).toUpperCase() ? true : false
}