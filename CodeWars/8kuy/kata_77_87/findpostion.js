/*
// ❓ Problem:
// Write a function called find_postion(string, letter) that does the following:
//
// - Converts the input string into an array using Array.from.
// - Checks if either the string or the letter is empty. If so, return "please Try Agin".
// - If both inputs are valid, use a for loop to search for the first occurrence of the letter in the array.
// - When the letter is found, return a message in the format:
//   Postion Leteer = ${i}
//
// Note: Do not use built-in methods like indexOf() or search().

*/
function find_postion(string, letter) {
    let test = Array.from(string);
    if (string === "" || letter === "") {
        return "please Try Agin";
    } else {
        for (let i = 0; i <= test.length; i++) {
            if (test[i] == letter) {
                return Postion Leteer = $ { i };
            }
        }
    }
}
console.log(find_postion("omar", "r"))