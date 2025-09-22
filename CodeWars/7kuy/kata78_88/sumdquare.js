/*
Write a function that sums squares of numbers in list that may contain more lists

*/
function SumSquares(l) {
    let test = Array.from(l).flat(Infinity);
    let result = test.map(function(e) {
        return e ** 2;
    }).reduce(function(one, two) {
        return one + two;
    })
    return result;
}
console.log(SumSquares([
    [1, 2], 3
]))