/*
Binary Search

Write a JavaScript program for binary search.

Sample array : [0,1,2,3,4,5,6]

console.log(l.br_search(5)) will return '5'

*/
function binarysearch(arr, number) {
    try {
        let test = Array.from(arr);
        for (let i = 0; i < test.length; i++) {
            if (test[i] == number) {
                return true
            }
        }
    } catch (eror) {
        return eror.message
    }
}
console.log(binarysearch([1, 2, 3, 4, 5], 2))