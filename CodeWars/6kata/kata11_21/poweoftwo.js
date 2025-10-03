/*
Write a function that tests if a given floating point number is a power of two, and then calculates the exponent.

For the purposes of this kata, the powers of two are 1, 2, 4, ..., 0.5, 0.25, ..., but also the negative values -1, -2, -4, ..., -0.5, -0.25, ...

If the number is a power of two in this sense, the function should return the exponent: 0 for input 1, 1 for input 2, -1 for 0.5, -2 for 0.25, and so on.

The sign of the number does not matter – the function should return 0 for input -1, 1 for -2, -1 for -0.5, ...

If the number is not a power of two, the function should return the error value NaN (not a number).

The function must only return an exponent if the floating point number exactly represents a power of two.


*/
function powerOfTwo(v) {
    //     if (v === 0) return NaN;

    // نتجاهل السالب (الأس هو اللي يهم)
    let val = Math.abs(v);

    // نجيب الأس باستخدام log2
    let exp = Math.log2(val);

    // لازم يكون الأس عدد صحيح (مش كسر)
    if (Number.isInteger(exp)) {
        return exp;
    }
    return NaN;
}

// ✅ تجارب
console.log(powerOfTwo(1)); // 0
console.log(powerOfTwo(2)); // 1
console.log(powerOfTwo(4)); // 2
console.log(powerOfTwo(0.5)); // -1
console.log(powerOfTwo(0.25)); // -2
console.log(powerOfTwo(-8)); // 3
console.log(powerOfTwo(3)); // NaN

console.log(powerOfTwo(0.5)); // -1
console.log(powerOfTwo(2)); // 1
console.log(powerOfTwo(-4)); // 2
console.log(powerOfTwo(0.25)); // -2
console.log(powerOfTwo(3)); // NaNg