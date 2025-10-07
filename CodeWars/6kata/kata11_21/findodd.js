/*
Problem:
Given an array of integers, find the number that appears an odd number of times.
There will always be exactly one integer that appears an odd number of times.

*/
function findOdd(A) {
    return A.find(num =>
        A.filter(x => x === num).length % 2 !== 0
    );
}