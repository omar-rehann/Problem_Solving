/*
Range of Integers Using Recursion

Write a JavaScript program to get integers in the range (x, y) using recursion.

Example : range(2, 9)

Expected Output : [3, 4, 5, 6, 7, 8]

*/
function range(start, end) {
    return new Promise((resolve, reject) => {
        if (start >= end) {
            reject("Invalid range: start must be less than end");
        } else {
            // دالة recursive داخلية
            function buildRange(s, e) {
                if (e - s <= 1) {
                    return [];
                }
                let arr = buildRange(s, e - 1);
                arr.push(e - 1);
                return arr;
            }

            resolve(buildRange(start, end));
        }
    });
}

// تجربة
range(2, 9)
    .then(result => console.log(result)) // [3, 4, 5, 6, 7, 8]
    .catch(error => console.log(error));

range(9, 2)
    .then(result => console.log(result))
    .catch(error => console.log(error)); // Invalid range: start must be less than end