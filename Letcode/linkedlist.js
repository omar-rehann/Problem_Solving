var add_two_number = function(L_1, L_2) {
    let linkedone = Array.from(L_1).reverse();
    let linkedtwo = Array.from(L_2).reverse();
    let carry = 0;
    let result = [];

    for (let i = 0; i < Math.max(linkedone.length, linkedtwo.length); i++) {
        let x = linkedone[i] || 0;
        let y = linkedtwo[i] || 0;
        let sum = x + y + carry;

        if (sum >= 10) {
            result.push(sum - 10);
            carry = 1;
        } else {
            result.push(sum);
            carry = 0;
        }
    }

    if (carry > 0) result.push(carry);

    return result.reverse();
}

console.log(add_two_number([3, 4, 2], [4, 6, 5])); // [8,0,7]