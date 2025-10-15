/*
Description:
Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.
Your algorithm should be very performant.
[input] array of integers ( with 0-based nonnegative indexing )
[output] integer
*/
function indexEqualsValue(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === mid) {
            result = mid; // خزّنه لأنك بتدور على أقل index
            right = mid - 1; // كمل تدور في الجزء اليسار
        } else if (arr[mid] < mid) {
            left = mid + 1; // تحرك يمين
        } else {
            right = mid - 1; // تحرك شمال
        }
    }

    return result;
}

console.log(indexEqualsValue([-3, -1, 1, 3, 5])); // ➜ 3