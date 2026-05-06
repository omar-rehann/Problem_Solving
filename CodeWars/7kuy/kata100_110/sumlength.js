/*

Sum and Length
In this kata you must return a string value, where the first part is the sum of positive numbers 
and the second part is the number of negative numbers.
Knowing that the first 0 is negative, the second is positive,
the third is negative, and so on...
*/
function sumLength(array) {
    let valone = Array.from(array);
    let postive = [];
    let negative = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            negative.push(valone[i])
        } else {
            postive.push(valone[i])
        }
    }

    let final = postive.reduce(function(one, two) {
        return one + two
    }, 0)

    let test = $ { final }
    $ { negative.length }

    return String(test)
}

console.log(sumLength([10, 20, 30, 40]))