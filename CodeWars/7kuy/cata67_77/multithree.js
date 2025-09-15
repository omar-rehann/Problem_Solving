/*
Given a positive integer n: 0 < n < 1e6, 
remove the last digit until you're left with a number
that is a multiple of three.

Return n if the input is already a multiple of three, 
and if no such number exists, return null.
*/

function prevMultOfThree(n) {
    // إذا الرقم الأصلي يقبل القسمة على 3
    if (n % 3 === 0) {
        return n;
    }

    // تقلل الرقم خطوة خطوة
    while (n > 0) {
        n = Math.floor(n / 10); // حذف آخر رقم
        if (n % 3 === 0) {
            return n; // لو قابل للقسمة على 3 رجعه
        }
    }

    // لو مفيش رقم يقبل القسمة على 3
    return null;
}

// اختبارات
console.log(prevMultOfThree(1)); // null
console.log(prevMultOfThree(25)); // null
console.log(prevMultOfThree(36)); // 36
console.log(prevMultOfThree(1244)); // 12
console.log(prevMultOfThree(952406)); // 9