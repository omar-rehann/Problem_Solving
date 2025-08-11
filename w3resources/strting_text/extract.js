/*
Extract Characters

Write a JavaScript function to extract a specified number of characters from a string.

Test Data :

console.log(truncate_string("Robin Singh",4));
"Robi"
*/

function convert(str, number) {
    let test = Array.from(str).join("");
    if (str == "" || number == "") {
        alert("Please try Agin")
    } else {
        return $ { test.slice(0, number) }
    }
}
console.log(convert("omar rehan", 4))