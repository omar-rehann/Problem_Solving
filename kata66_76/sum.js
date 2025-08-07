/*

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/
function sumarray(arr1, arr2) {
    let one = Array.from(arr1);
    let two = Array.from(arr2);
    let three = one.concat(two);
    let result = three.reduce(function(one, two) {
        return one + two;
    }, 0);
    return result;
}