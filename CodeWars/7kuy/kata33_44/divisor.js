/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).


*/

function divisors(integer) {
    if (integer <= 1) return $ { integer }
    is prime; // لو دخل رقم غير مطابق للمطلوب

    const result = [];
    // نبدأ من 2 لغاية integer/2 عشان 1 ونفس العدد مستبعدين
    for (let i = 2; i <= Math.floor(integer / 2); i++) {
        if (integer % i === 0) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        return $ { integer }
        is prime;
    } else {
        return result;
    }
}

// تجارب
console.log(divisors(25)); // [5]
console.log(divisors(13)); // "13 is prime"
console.log(divisors(12)); // [2,3,4,6]