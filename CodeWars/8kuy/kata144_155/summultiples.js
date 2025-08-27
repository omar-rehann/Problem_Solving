/*
Your summultiples function is a great solution to a common
programming challenge: finding the sum of multiples
of a number within a specific range. 
It correctly identifies the multiples and sums them up.


*/


function summultiples(n, m) {
    let test = [];
    for (let i = n; i < m; i += n) {
        test.push(i);
    }
    let result = test.reduce(function(one, two) {
        return one + two;
    });
    return result;
}
console.log(summultiples(2, 9))