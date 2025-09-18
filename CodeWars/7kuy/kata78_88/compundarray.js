/*
You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}
*/
function compoundArray(a, b) {
    let one = Array.from(a);
    let two = Array.from(b);
    let z = [];
    let maxLen = Math.max(one.length, two.length);

    for (let i = 0; i < maxLen; i++) {
        if (one[i] !== undefined) z.push(one[i]);
        if (two[i] !== undefined) z.push(two[i]);
    }

    return z;
}

console.log(compoundArray([1, 2, 3, 4, 5, 6], [9, 8, 7, 6]));