/*

isNaN doesn't work very well. We want it to tell us whether the value or object we're dealing with is a number or not. Instead, it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called isAN, for is A Number. If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.

*/
function isAN(value) {
    // لو القيمة رقم حقيقي
    if (typeof value === "number" && !Number.isNaN(value)) {
        return true;
    }

    // لو القيمة Number object
    if (value instanceof Number && !Number.isNaN(value.valueOf())) {
        return true;
    }

    // أي حاجة تانية مش رقم
    return false;
}

// أمثلة للتجربة
console.log(isAN(5)); // true (رقم عادي)
console.log(isAN(3.14)); // true (رقم عشري)
console.log(isAN(new Number(10))); // true (Number object)
console.log(isAN(NaN)); // false
console.log(isAN("123")); // false
console.log(isAN(undefined)); // false
console.log(isAN({})); // false