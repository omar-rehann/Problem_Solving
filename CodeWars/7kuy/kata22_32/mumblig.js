/*
The problem this code solves is to transform
a given string into a "mumbled" string where each
character is repeated a number of times corresponding
to its position in the 
original string (1 for the first, 2 for the second, etc.).

*/
function mumbling(str) {
    let test = Array.from(str);
    let result = test.map(function(e, index) {
        return e.repeat(index + 1)
    })
    return result
}
console.log(mumbling("omar"))