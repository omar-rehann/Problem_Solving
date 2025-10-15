/*
Description:
Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.
Your algorithm should be very performant.
[input] array of integers ( with 0-based nonnegative indexing )
[output] integer
*/
function indexEqualsValue(a) {
    let test = Array.from(a);
    for (let i = 0; i < test.length; i++) {
        if (test[i] === i) {
            return test[i]
        }
    }
    return -1
}
console.log(indexEqualsValue([-3, -1, 1, 3, 5]))