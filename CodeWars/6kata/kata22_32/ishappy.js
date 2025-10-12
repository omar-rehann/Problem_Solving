/*
happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers) (Wikipedia).

Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.

Examples
For example number 7 is happy because after a number of steps the computed sequence ends up with a 1: 7, 49, 97, 130, 10, 1 

While 3 is not, and would give us an infinite sequence: 3, 9, 81, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...

Happy coding!

Algorithms


*/
function isHappy(n, seen = new Set()) {
    // لو الرقم اتشاف قبل كده يبقى داخل في loop
    if (seen.has(n)) return false;

    seen.add(n); // ضيف الرقم للمجموعة

    let test = Array.from(String(n));
    let result = test
        .map(function(e) {
            return e ** 2;
        })
        .reduce(function(one, two) {
            return one + two;
        });

    if (result === 1) {
        return true;
    } else {
        return isHappy(result, seen); // استدعي تاني بنفس المجموعة
    }
}

console.log(isHappy(4)); // false
console.log(isHappy(7)); // true