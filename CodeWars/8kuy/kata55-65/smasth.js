/*
🧠 Problem Title: Smash the Words

❓ Problem Statement:  
Write a function that takes an array of strings and returns a single string formed by concatenating all the elements without any spaces.

📥 Input:  
- An array `words` containing strings.

📤 Output:  
- A single string representing the concatenation of all elements in the array.

📌 Example:  
- Input: ["omar", "Nasser", "Ali", "REhan"]  
  Output: "omarNasserAliREhan"  
- Input: ["Hello", "World"]  
  Output: "HelloWorld"

*/
function smash(word) {
    let test = Array.from(word);
    let result = test.reduce(function(one, two) {
        return one + two;
    });
    return result;
}
console.log(smash(["omar", "Nasser", "Ali", "REhan"]))