/*
### ❓ Problem Statement: `examntion(str)`

Write a function called `examntion` that removes all exclamation marks (`!`) from a given string.

#### Requirements:
- The function should take one parameter:
  - `str`: a string that may contain one or more exclamation marks.
- The function should return a new string with all exclamation marks removed.

#### Example:
```javascript
examntion("omar!!!!!!"); // returns "omar"
examntion("!hello!world!"); // returns "helloworld"

*/
function examntion(str) {
    let test = Array.from(str);
    let result = test.filter(function(e) {
        return e == "!" ? "" : e;
    }).join("");
    return result;
}
console.log(examntion("omar!!!!!!"))