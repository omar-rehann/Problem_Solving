function decodeString(s) {
    const stack = []; // Stack لتخزين الأرقام والسلاسل
    let currentString = ""; // السلسلة الحالية
    let currentNum = 0; // الرقم الحالي
    for (let char of s) {
        if (!isNaN(char)) { // إذا كان رقمًا
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push(currentNum); // ادفع الرقم
            stack.push(currentString); // ادفع السلسلة الحالية
            currentNum = 0;
            currentString = "";
        } else if (char === ']') {
            const num = stack.pop(); // أخرج الرقم
            const prevString = stack.pop(); // أخرج السلسلة السابقة
            // كرر السلسلة الحالية num مرات
            let repeated = "";
            for (let i = 0; i < num; i++) {
                repeated += currentString;
            }
            // أضف التكرار إلى السلسلة السابقة
            currentString = prevString + repeated;
        } else { // حرف عادي
            currentString += char;
        }
    }