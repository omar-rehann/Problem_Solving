/*
Area of an arrow
An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

*/
/*
Area of an arrow
An arrow is formed in a rectangle with sides a and b by joining the bottom corners 
to the midpoint of the top edge and the centre of the rectangle.
The function returns the area of the arrow.
*/

function arrowArea(a, b) {
    // نتأكد إن الأبعاد أكبر من صفر
    if (+a <= 0 || +b <= 0) {
        return 0; // أو ممكن throw error حسب المطلوب
    }

    // مساحة السهم = نصف مساحة المستطيل بالكامل
    let area = (a * b) / 2;
    return area;
}

// أمثلة للتجربة
console.log(arrowArea(5, 10)); // 25
console.log(arrowArea(6, 4)); // 12
console.log(arrowArea(0, 10)); // 0
console.log(arrowArea(8, 8)); // 32

console.log(arrowArea(5, 10))