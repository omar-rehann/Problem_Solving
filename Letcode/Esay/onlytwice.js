/*

"Write a function that returns the elements which appear exactly twice in a given array."
*/
function onlytwice(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count < 2) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(onlytwice([1, 1, 1, 2, 2, 3]))