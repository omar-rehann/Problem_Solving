/*
Task:
You have to create a function to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.

Description:
Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number, is a number which is the product of two consecutive integers, that is, n(n + 1).

The first few Pronic Numbers are - 0, 2, 6, 12, 20, 30, 42...

*/
function isPronic(n) {
    if (n == 0) return true;
    for (let i = 0; i < n; i++) {
        let product = (i + 1) * i;
        if (product == n) {
            return true
        } else if (product > n) {
            return false;
        }
    }
    return false;
}
console.log(isPronic(20));