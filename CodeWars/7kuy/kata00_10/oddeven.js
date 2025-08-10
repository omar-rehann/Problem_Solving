/*
If the input array is empty consider it as: [0] (array with a zero).
Examples:
Input: [0] Output: "even" Input: [0, 1, 4] Output: "odd" Input: [0, -1, -5] Output: "even"

*/
function oddOrEven(array) {
    let test = Array.from(array);
    let result = test.map(function(e) {
        return e < 0 ? -e : e;
    }).reduce(function(one, two) {
        return one + two;
    }, 0)
    if (result % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    };
}
console.log(oddOrEven([0, -1, -5]));