/*

You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

Return new array.

*/
function swapHeadAndTail(arr) {
    let test = Array.from(arr);
    let lengthh = test.length;
    let number;
    let one;
    let two;
    let odd;
    let three;
    if (lengthh % 2 === 0) {
        number = lengthh / 2;
        one = test.slice(0, number);
        two = test.slice(number);
        three = two.concat(one);
    } else {
        number = Math.trunc(lengthh / 2);
        one = test.slice(0, number);
        odd = test[number];
        two = test.slice(++number);
        three = two.concat([odd], one);
        // three=[two,odd,one];

    }
    return three
}
console.log(swapHeadAndTail(([1, 2, 3, 4, 5])))