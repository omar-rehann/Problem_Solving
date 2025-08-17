/*
The problem this code solves is to take a string of digits, 
sort those digits in descending order, 
and then return them as a single string.
*/
function decedingOrder(x) {
    let test = Array.from(x);
    let result = test.sort((a, b) => b - a);
    return result.join("")
}
console.log(decedingOrder("12349180"))