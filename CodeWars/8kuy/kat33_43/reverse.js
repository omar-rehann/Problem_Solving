/*

Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223
*/
function reverse(number) {
    let convert = String(number);
    let test = Array.from(convert).reverse().join("");
    return Number(test);
}
console.log(reverse(2345))