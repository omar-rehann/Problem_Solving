/**
 * Write a function called double that takes a string as input.
 * The function should return a new string where each character in the original
 * string is repeated twice, in the same order.
 *
 * Example:
 * double("omarrehan") => "oommaarrrreehhaann"
 */
function double(str) {
    let test = Array.from(str);
    let result = test.map(function(e) {
        return e + e;
    }).join("")
    return result;
}
console.log(double("omarrehan"))