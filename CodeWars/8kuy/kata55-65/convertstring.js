/*
🧠 Problem Title: Number to Word Converter

❓ Problem Statement:  
Write a function that takes an integer from `1` to `8` and returns its corresponding English word. If the number is outside this range, return `"Invalid number"`.

📥 Input:  
- An integer `n` between 1 and 8.

📤 Output:  
- A string representing the English word for the number, or `"Invalid number"` if out of range.

📌 Example:  
- Input: 6  
  Output: "Six"  
- Input: 9  
  Output: "Invalid number"

 */
function convert(n) {
    switch (n) {
        case 1:
            return "One";
            break;
        case 2:
            return "Two";
            break;
        case 3:
            return "Three";
            break;
        case 4:
            return "Four";
            break;
        case 5:
            return "Five";
            break;
        case 6:
            return "Six";
            break;
        case 7:
            return "Seven";
            break;
        case 8:
            return "eight";
            break;
    }
}
console.log(convert(6))