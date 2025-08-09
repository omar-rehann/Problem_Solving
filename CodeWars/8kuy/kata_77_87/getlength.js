/*
🧠 Problem Title: Word Length Mapper

❓ Problem Statement:  
Write a function that takes a string of space-separated words and returns an array where each element is a string in the format `"word => length"`.

📥 Input:  
- A string `str` containing space-separated words.

📤 Output:  
- An array of strings, each showing a word and its length.

📌 Example:  
- Input: "omar rehan"  
  Output: ["omar => 4", "rehan => 5"]  
- Input: "hello world from egypt"  
  Output: ["hello => 5", "world => 5", "from => 4", "egypt => 5"]

*/
function get_length(str) {
    let test = str.split(" ");
    let result = test.map(function(e) {
        return $ { e } => $ { e.length }
    })
    return result
}
console.log(get_length("omar rehan"))