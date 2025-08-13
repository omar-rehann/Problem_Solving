/*
Task
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/
function leastLarger(a, i) {
    let target = a[i]; // الرقم اللي هنقارن عليه
    let smallestLargerIndex = -1;

    for (let j = 0; j < a.length; j++) {
        if (a[j] > target) {
            // لو أكبر من الرقم عند i
            if (smallestLargerIndex === -1 || a[j] < a[smallestLargerIndex]) {
                smallestLargerIndex = j; // نحفظ أصغر رقم أكبر
            }
        }
    }

    return smallestLargerIndex;
}

// اختبارات
console.log(leastLarger([4, 1, 3, 5, 6], 0)); // => 3
console.log(leastLarger([4, 1, 3, 5, 6], 4)); // => -1
console.log(leastLarger([4, 1, 3, 5, 6, 10], 0)); // => 3