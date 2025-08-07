/*

🧠 Problem Title: Boolean to String Converter

❓ Problem Statement:  
Write a function that takes a boolean value and returns a string `"Yes"` if the value is `true`, and `"No"` if the value is `false`.

📥 Input:  
- A boolean value `bool`.

📤 Output:  
- A string: `"Yes"` if `bool` is `true`, `"No"` if `bool` is `false`.

📌 Example:  
- Input: true  
  Output: "Yes"  
- Input: false  
  Output: "No"
*/
function convert(bool) {
    if (bool) {
        return "Yes "
    } else {
        return "No"
    }
}
console.log(convert(false))