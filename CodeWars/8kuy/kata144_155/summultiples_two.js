/*
Your summultiples function is a great solution to a common
programming challenge: finding the sum of multiples
of a number within a specific range. 



*/


function summultiples(n, m) {
    let test = [];
    if (m < n) {
        return n;
    }
    for (let i = n; i < m; i += n) {
        test.push(i);
    }
    return test;
}
console.log(summultiples(9, 2))