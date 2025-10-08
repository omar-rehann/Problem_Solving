/*
Given a list of positive integers,
find and return the number that appears
an odd number of times in the list.
It is guaranteed that there will always be 
exactly one such number.
*/
function Spinwords(str) {
    let test = str.split(" ");
    let z = [];
    for (let i = 0; i < test.length; i++) {
        if (test[i].length >= 5) {
            z.push(Array.from(test[i]).reverse().join(""));
        } else {
            z.push(test[i])
        }
    }
    return z.join(" ");
}
console.log(Spinwords("Hey fellow warriors"))