/*
In mathematics, an nth root of a number x, where n is usually assumed to be a positive integer, is a number r which, when raised to the power n, yields x:

r
n
=
x
r 
n
 =x
Given number n, such that n > 1, find if its 2nd root, 4th root and 8th root are all integers (fractional part is 0). Return true if yes, false if no.

*/
function perfectRoots(n) {
    if (n > 1 && Number.isInteger(Math.sqrt(n)) && Number.isInteger(Math.pow(n, 1 / 4)) && Number.isInteger(Math.pow(n, 1 / 8))) {
        return true
    } else {
        return false;
    }
}
console.log(perfectRoots(256))