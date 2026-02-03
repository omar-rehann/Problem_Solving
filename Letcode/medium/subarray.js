/*



**Problem: Number of Subarrays of Size K with Average Greater Than or Equal to Threshold**

Given an integer array `array`, and two integers `k` and `threshold`, return the number of contiguous subarrays of size `k` whose average is greater than or equal to `threshold`.

A subarray must:

* Be contiguous
* Have exactly `k` elements

The average of a subarray is calculated as:

[
\text{average} = \frac{\text{sum of subarray elements}}{k}
]

Return the total count of such subarrays.

*/

function subbarray(array, k, threshold) {
    let count = 0;

    for (let i = 0; i <= array.length - k; i++) {

        let test = array.slice(i, i + k);
        let result = test.reduce(function(one, two) {
            return one + two;
        }, 0);
        if ((result / k) >= threshold) {
            count++;
        }
    }

    return count;
}

console.log(subbarray([2, 2, 2, 5, 5, 5, 8], 3, 4));