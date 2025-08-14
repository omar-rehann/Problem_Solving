/*
📌 المسألة:
اكتب دالة JavaScript تأخذ معاملين (الطول والعرض).
- إذا كان الطول يساوي العرض → الشكل مربع: احسب المساحة والمحيط.
- إذا كان الطول لا يساوي العرض → الشكل مستطيل: احسب المساحة والمحيط.
- اطبع النتيجة بشكل واضح للمستخدم.
*/

function shapeInfo(length, width) {
    let area, perimeter;

    if (length === width) {
        // مربع
        area = length * width;
        perimeter = 4 * length;
        console.log(🔷الشكل مربع\ nالمساحة: $ { area }\
            nالمحيط: $ { perimeter });
    } else {
        // مستطيل
        area = length * width;
        perimeter = 2 * (length + width);
        console.log(🟦الشكل مستطيل\ nالمساحة: $ { area }\
            nالمحيط: $ { perimeter });
    }
}

// مثال على الاستدعاء
shapeInfo(5, 5); // مربع
shapeInfo(5, 8); // مستطيل