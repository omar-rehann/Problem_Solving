/*
Binary Search

Write a JavaScript program for binary search.

Sample array : [0,1,2,3,4,5,6]

console.log(l.br_search(5)) will return '5'

*/
function binarysearch(arr, number) {
    return new Promise((resolve, reject) => {
        if (arr.length > 0) {
            let left = 0;
            let right = arr.length - 1;

            while (left <= right) {
                let mid = Math.floor((left + right) / 2);

                if (arr[mid] === number) {
                    resolve(number);
                    return;
                } else if (arr[mid] < number) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            reject("Not found number");
        } else {
            reject("Not Found Array");
        }
    });
}

binarysearch([1, 2, 3, 4, 5], 2).then(
    (resolvevalue) => console.log(resolvevalue),
    (rejectvalue) => console.log(rejectvalue)
);
// console.log(binarysearch([1,2,3,4,5],2))