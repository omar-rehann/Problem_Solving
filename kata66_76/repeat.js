/*

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
* "String" -> "SSttrriinngg" * "Hello World" -> "HHeelllloo WWoorrlldd" * "1234!_ " -> "11223344!!__ "
*/
function doubleChar(str) {
    let test = Array.from(str);
    let result = test.map(function(e) {
        return e + e;
    }).join("");
    return result;
}
console.log(doubleChar("omarrehan"))