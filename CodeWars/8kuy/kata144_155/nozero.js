/*
Your nozero function correctly removes all '0' digits from
a number's string representation. It converts the number to a string,
iterates through its digits,
and builds a new string excluding any '0's.


*/

function nozero(n) {
    let test = Array.from(n);
    let result = test.map(function(e) {
        return e == 0 ? "" : e;
    }).join("");
    return result;
}
console.log(nozero("12300076544"))