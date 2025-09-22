/*
Write a function that takes an integer in input and outputs a string with currency format.

Integer in currency format is expressed by a string of number where every three characters are separated by comma.

For example:

123456 --> "123,456"
Input will always be an positive integer, so don't worry about type checking or negative/float values.

*/

function toCurrency(price) {
    let str = String(price);
    let result = "";
    let count = 0;

    // نمشي من آخر الرقم للي الأول
    for (let i = str.length - 1; i >= 0; i--) {
        result = str[i] + result;
        count++;
        if (count % 3 === 0 && i !== 0) {
            result = "," + result;
        }
    }

    return result;
}

// أمثلة
console.log(toCurrency(123456)); // "123,456"
console.log(toCurrency(628946)); // "628,946"
console.log(toCurrency(1234)); // "1,234"
console.log(toCurrency(123456789012)); // "123,456,789,012"
console.log(toCurrency(1269841)); // "1,269,841"

console.log(toCurrency(123456)); // "123,456"