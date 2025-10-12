/*
Given two positive integers n and p, find a positive integer k (if it exists) such that the sum of the digits of n taken to the successive powers starting from p is equal to n × k.

If such k exists, return it; otherwise, return -1.



*/
function playingdigit(n, p) {
    let test = Array.from(String(n));
    let counter = p;
    let z = [];
    for (let i = 0; i < test.length; i++) {
        z.push(test[i] ** counter);
        counter++;
    }
    let final = z.reduce(function(one, two) {
        return one + two;
    })

    if (n * p == final) {
        return This is fina result = $ { final }
    } else {
        return Not Condtion is true
        try agin
    }

    return final
}
console.log(playingdigit(89, 1));