/*
Problem: Swap First and Last Characters
Write a function called replaceFirstWithLast that
takes a single string as an argument. The function's
goal is to swap the very first character of the string
with the very last character. The function should then
return the modified string.
The function should handle strings of any length greater
than one. If the string has only one character 
or is empty, it should return the original string.
*/
function replaceFirstWithLast(word) {
    let test = Array.from(word);
    let frist = test.slice(0, 1);
    let second = test.slice(test.length - 1)
    let result = second + test.slice(1) + frist;
    return result.join("");
}

console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oelloH