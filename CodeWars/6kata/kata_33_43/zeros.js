/*
Description:
You are given a positive integer n.

The task is to calculate how many binary numbers without leading zeros 
(such that their length is n and they do not contain two zeros in a row) there are. 
Note that zero itself ("0") meets the conditions (for n = 1).
*/

function zeros(n) {
    if (n === 1) return 2; // السلاسل: "0" و "1"

    let f1 = 2; // f(1)
    let f2 = 3; // f(2)
    let result = f2;

    for (let i = 3; i <= n; i++) {
        result = f1 + f2; // f(n) = f(n-1) + f(n-2)
        f1 = f2;
        f2 = result;
    }

    return result;
}

// أمثلة للتجربة
console.log(zeros(1)); // 2
console.log(zeros(2)); // 3
console.log(zeros(3)); // 5
console.log(zeros(4)); // 8
console.log(zeros(5)); // 13