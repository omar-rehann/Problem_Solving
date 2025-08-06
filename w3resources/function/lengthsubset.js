/*

Fixed-Length Subsets
Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
*/
let arr = [1, 2, 3];
for (let i = 0; i <= arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
        if (arr[j] === undefined || arr[i] === undefined) {
            continue;
        }
        console.log([arr[i], arr[j]])

    }
}