/*
Given a positive integer N, 
return the largest integer k such that 3^k < N.

*/
function largestPower(n) {

    for (let i = 0; i <= n; i++) {
        let result = 3 ** i;
        if (n <= result) {
            return i - 1
        }
    }
    return n;
}
console.log(largestPower(3))