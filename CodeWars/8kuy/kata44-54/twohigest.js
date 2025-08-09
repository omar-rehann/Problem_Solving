/*
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest.
Examples:
[4, 10, 10, 9] => [10, 9] [1, 1, 1] => [1] [] => []
*/
function twoHighest(arr) {
    if (!arr || arr.length === 0) return [];

    // نزيل العناصر المكررة أولاً (اختياري حسب المطلوب)
    let unique = [...new Set(arr)];

    // نرتب المصفوفة تنازليًا
    unique.sort((a, b) => b - a);

    // نرجع أول رقمين (أعلى رقمين)
    return unique.slice(0, 2);
}