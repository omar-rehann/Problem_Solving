/*
    Title: Double Char
Task: Given a string, you have to
return a string in which each character(
    case -sensitive) is repeated once.
Examples(Input - > Output):
    "String" - > "SSttrriinngg"
"Hello World" - > "HHeellllo  WWoorrlldd"
"1234!_ " - > "11223344!!__ "

*/
function double(e) {
    const result = Array.from(e).map((e) => {
        return e + e;
    })
    return result
}