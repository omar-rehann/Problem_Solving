/*

Your duplicate function effectively solves the common
"remove duplicates from an array" problem. It iterates
through the input array and builds a new array containing
only the unique elements.

*/
function duplicate(arr) {
    let test = Array.from(arr);
    let z = [];
    for (e of test) {
        if (!z.includes(e)) {
            z.push(e);
        }
    }
    return z;
}
console.log(duplicate([1, 1, 2, 3, 4, 4, 4, 5]))