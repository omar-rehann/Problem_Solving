/*
Sum of Array Elements

Write a JavaScript program to compute the sum
of an array of integers.

Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
*/

function sum(arr) {
    return new Promise((resolve, reject) => {
        if (arr.length > 0) {
            // استخدم reduce لجمع العناصر
            let result = arr.reduce((one, two) => one + two, 0);
            resolve(result);
        } else {
            reject("Not found data");
        }
    });
}

// استخدام then و catch
sum([1, 2, 3, 4, 5, 7])
    .then(result => console.log("Sum =", result)) // الناتج Sum = 22
    .catch(error => console.log(error));