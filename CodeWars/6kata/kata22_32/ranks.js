/*
Description:
Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values. For example:

array = [9,3,6,10] --> ranks = [2,4,3,1]

array = [3,3,3,3,3,5,1] --> ranks = [2,2,2,2,2,1,7]

because there is one 1st place value, a five-way tie for 2nd place, and one in 7th place.

*/
function ranks(a) {
    // نعمل نسخة مرتبة تنازليًا
    let sorted = Array.from(a).sort((x, y) => y - x);

    // نجهز خريطة للترتيب
    let rank = new Map();

    // نملأ الخريطة بالقيمة والترتيب
    sorted.forEach((value, index) => {
        if (!rank.has(value)) {
            rank.set(value, index + 1);
        }
    });

    // نرجع الترتيب حسب شكل المصفوفة الأصلية
    return a.map(value => rank.get(value));
}

console.log(ranks([9, 3, 6, 10])); // [2, 4, 3, 1]
console.log(ranks([3, 3, 3, 3, 3, 5, 1])); // [2,2,2,2,2,1,7]