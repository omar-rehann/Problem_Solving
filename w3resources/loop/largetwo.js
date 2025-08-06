/*

Largest of Two Integers
Write a JavaScript program that displays the largest integer among two integers.
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