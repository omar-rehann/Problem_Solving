/*
A number is simply made up of digits.
The number 1256 is made up of the digits 1, 2, 5, and 6.
For 1256 there are 24 distinct permutations of the digits:
1256, 1265, 1625, 1652, 1562, 1526, 2156, 2165, 2615, 2651, 2561, 2516,
5126, 5162, 5216, 5261, 5621, 5612, 6125, 6152, 6251, 6215, 6521, 6512.

Your goal is to write a program that takes a number, n, and returns the average value of all distinct permutations of the digits in n. Your answer should be rounded to the nearest integer. For the example above the return value would be 3889. *

n will never be negative


*/
/*
A number is simply made up of digits.
The number 1256 is made up of the digits 1, 2, 5, and 6.
For 1256 there are 24 distinct permutations of the digits:
1256, 1265, 1625, 1652, 1562, 1526, 2156, 2165, 2615, 2651, 2561, 2516,
5126, 5162, 5216, 5261, 5621, 5612, 6125, 6152, 6251, 6215, 6521, 6512.

Your goal is to write a program that takes a number, n, and returns the average value of all distinct permutations of the digits in n. Your answer should be rounded to the nearest integer. For the example above the return value would be 3889. *

n will never be negative
*/

function permutationAverage(n) {
    let factorial = 1;
    let digit = 0;
    let display = 1;
    let sumbinary = 0;

    let test = Array.from(String(n));
    let length = test.length;

    // مجموع الأرقام
    let sumnumber = test.reduce(function(one, two) {
        return Number(one) + Number(two);
    }, 0);

    // بدل factorial هنا نحسب طول الرقم (كان في غلط باستخدام n.length)
    for (let i = length; i > 1; i--) {
        factorial *= i;
    }

    // مش هنحتاج display و sumbinary في الحل الصحيح
    // نستخدم قانون permutations average:
    // (مجموع الأرقام / عدد الأرقام) × (عدد مرات 1 على طول الرقم)
    let ones = Number("1".repeat(length));
    let final_result = (sumnumber / length) * ones;

    return Math.round(final_result);
}

console.log(permutationAverage(1256)); // 3889
console.log(permutationAverage(3)); // 3
console.log(permutationAverage(45)); // 55

console.log(permutationAverage(3))