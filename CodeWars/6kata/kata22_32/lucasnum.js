/*
Description:
Lucas numbers are numbers in a sequence defined like this:

L(0) = 2
L(1) = 1
L(n) = L(n-1) + L(n-2)
Your mission is to complete the function that returns the nth term of this sequence.

Note: It should work for negative numbers as well; how you do this is you flip the equation around, so for negative numbers: L(n) = L(n+2) - L(n+1)

*/
function lucasnum(n, memo = {}) {
    if (isNaN(n)) return false; // التحقق من أن المدخل رقم
    if (n === 0) return 2;
    if (n === 1) return 1;

    if (memo[n] !== undefined) return memo[n]; // لو اتحسب قبل كده

    if (n > 1) {
        memo[n] = lucasnum(n - 1, memo) + lucasnum(n - 2, memo);
    } else {
        memo[n] = lucasnum(n + 2, memo) - lucasnum(n + 1, memo);
    }

    return memo[n];
}

// أمثلة اختبار
console.log(lucasnum(0)); // 2
console.log(lucasnum(1)); // 1
console.log(lucasnum(2)); // 3
console.log(lucasnum(5)); // 11
console.log(lucasnum(-1)); // 1
console.log(lucasnum(-5)); // -11