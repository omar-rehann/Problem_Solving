/*
🧠 Problem Title: Extract Maximum Score from Matches

❓ Problem Statement:  
Write a function that takes an array of strings representing game scores in the format `"x:y"` and returns a new array containing the higher score from each match.

📥 Input:  
- An array `games` of strings, each formatted as `"x:y"` where `x` and `y` are non-negative integers.

📤 Output:  
- An array of integers, each representing the maximum score from the corresponding match.

📌 Example:  
- Input: ["3:1", "2:2", "0:1"]  
  Output: [3, 2, 1]

*/
function point(games) {
    let test = Array.from(games);
    let result = test.map(function(e) {
        const [x, y] = e.split(":").map(function(e) {
            return +e;
        })
        return Math.max(x, y)
    });

    return result
}
console.log(point(["3:1", "2:2", "0:1"]));