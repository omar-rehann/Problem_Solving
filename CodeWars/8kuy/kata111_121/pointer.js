/*
Task
Create a method all which takes two params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True



*/
function all(arr, fun) {
    // حوّل الـ arr لـ array جديد (احتياطي)
    let test = Array.from(arr);

    // لف على كل العناصر
    for (let e of test) {
        if (!fun(e)) {
            return false;
            // رجّع false ووقف
        }
    }

    return true;
}

// دالة الاختبار: هل العدد زوجي؟
function even(num) {
    return num % 2 === 0;
}

// تجارب
console.log(all([2, 4, 6], even)); // true (كل الأرقام زوجية)
console.log(all([2, 3, 6], even)); // false (فيه رقم فردي)
console.log(all([], even)); // true (الـ array فاضية → ما فيش عنصر يخالف الشرط)