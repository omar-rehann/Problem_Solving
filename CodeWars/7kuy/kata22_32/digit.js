/*
Your digit function correctly implements the logic
to square each digit of a number and then concatenate 
the squared results. For example, with an input of 9119,
it squares 9 to get 81, 1 to get 1, 1 to get 1, and 9 to get 81,
resulting in the string "811181".


*/


function digit(num) {
    let test = Array.from(String(num));
    let result = test.map(function(e) {
        return e ** 2;
    }).join("");
    return result;
}
console.log(digit(9119))