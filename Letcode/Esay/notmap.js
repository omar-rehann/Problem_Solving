/**
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
 */
var map = function(arr, fn) {
    let final = [];
    let test = Array.from(arr);
    for (let i = 0; i < test.length; i++) {
        let result = fn(test[i], i);
        final.push(result)
    }
    return final;
}

function plus(e, index) {
    return Element = $ { e } && index of element $ { index };
}
console.log(map([1, 2, 3, 4], plus))