/*


Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:


*/



function reduce(fraction) {
    let test = Array.from(fraction);
    let check = test.filter(function(e) {
        return e > 0;
    });
    let one = check[0];
    let two = check[1];

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    let divisor = gcd(one, two);
    return [one / divisor, two / divisor];
}

console.log(reduce([12, 8]));