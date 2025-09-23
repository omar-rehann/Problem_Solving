/*
Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.


*/
function oddOne(arr) {
    let test = Array.from(arr);

    // نجيب index كل الأرقام الفردية
    let result = test.map(function(e, i) {
        return e % 2 !== 0 ? i : "";
    }).filter(function(e) {
        return e !== "";
    });

    // نتحقق من الحالات
    if (result.length === 0) {
        return -1; // كله زوجي
    } else if (result.length > 1) {
        return -1; // أكتر من رقم فردي
    } else {
        return result[0]; // الرقم الفردي الوحيد
    }
}

// أمثلة:
console.log(oddOne([4, -8, 98, -12, -7, 90, 100])); // ➝ 4
console.log(oddOne([2, 4, 6, 8])); // ➝ -1
console.log(oddOne([2, 3, 4, 5, 6])); // ➝ -1
console.log(oddOne([-2, -4, -6, -7, -8])); // ➝ 3