/*
Program a function that takes in an array of arrays of numbers and returns the sum of the averages of the arrays.
Example
[
  [3, 4, 1, 3, 5, 1, 4], #  (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 =  3
  [21, 54, 33, 21, 77]   # (21 + 54 + 33 + 21 + 77)     / 5 = 41.2
]
result: 3 + 41.2 = 44.2
*/
function sumAverage(arrays) {
    let testone = Array.from(arrays);
    let sum, final;
    let anotherarray = []
    for (let i = 0; i < testone.length; i++) {
        sum = testone[i].reduce(function(one, two) {
            return one + two;
        })
        final = sum / testone[i].length;
        anotherarray.push(final)
    }
    return anotherarray.reduce(function(one, two) {
        return one + two;
    })
}

console.log(sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77]
]))