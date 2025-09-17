/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b


*/
function shorterReverseLonger(a, b) {
    let test = [a, b];
    let result = test.reduce(function(one, two) {
        if (one.length > two.length) {
            return two + Array.from(one).reverse().join("") + two;
        } else if (two.length > one.length) {
            return one + Array.from(two).reverse().join("") + one
        } else if (one.length == two.length) {
            return two + Array.from(one).reverse().join("") + two;
        }
    })
    return result;
}
console.log(shorterReverseLonger("Hello", "world"))