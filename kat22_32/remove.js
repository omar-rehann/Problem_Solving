/*
### ❓ Problem Statement: `remove(str)`

Write a function called `remove` that filters out all occurrences of the word `"Remove"` from an array of strings.

#### Requirements:
- The function should accept one parameter:
  - `str`: an array of strings.
- The function should return a new string containing all elements **except** those equal to `"Remove"`, joined by a space.

#### Example:
```javascript
remove(["omar", "Remove", "Nasser", "Remove", "ALi"]); 
// returns "omar Nasser ALi"
*/
function remove(str) {
    let test = Array.from(str);
    let result = test.filter(function(e) {
        return e == "Remove" ? "" : e;
    }).join(" ");
    return result;
}
console.log(remove(["omar", "Remove", "Nasser", "Remove", "ALi"]))