/*

Problem Statement:

You are given an array of integers (length ≥ 3). The array is either:

mostly even numbers with a single odd number, or

mostly odd numbers with a single even number.

👉 Write a function that returns the outlier (the single different integer).

*/


function parlityQualter(nums) {
    let test = Array.from(nums);
    let even = [];
    let odd = [];
    let result = test.filter(function(e) {
        return e % 2 == 0 ? even.push(e) : odd.push(e)
    })
    if (even.length > odd.length) {
        return odd.join("")
    } else {
        return even.join("")
    }
}
console.log(parlityQualter([1, 3, 5, 7, 9, 2]))