/*
Problem: Add Two Numbers

Given two arrays l1 and l2, each representing a non-negative integer in reverse order, add the two numbers and return the result as an array in reverse order.

Each element in the arrays represents a single digit.
If the sum of two digits is 10 or greater, carry the extra value to the next digit.



*/


function addtwonum(l1, l2) {
    let one = Array.from(l1);
    let two = Array.from(l2);
    let result = 0;
    let z = [];
    let carry = 0;

    for (let i = 0; i < one.length || i < two.length; i++) {
        let x = one[i] || 0;
        let y = two[i] || 0;

        result = x + y + carry;

        if (result >= 10) {
            z.push(result % 10);
            carry = Math.floor(result / 10);
        } else {
            z.push(result);
            carry = 0;
        }
    }



    return z;
}

console.log(addtwonum([1, 2, 4], [4, 5, 6]));