/*

In this kata you will be given an array of the dimensions
of rectangles (array with width and length) and circles
(radius - just a number). Your task is to sort the objects
by their area in ascending order 
and return the sorted array of areas.


*/
function sortByArea(array) {
    let test = Array.from(array);
    let z = [];
    let result = test.map(function(e) {
        if (Array.isArray(e)) {
            z.push(e[0] * e[1]);
        } else {
            z.push(Math.PI * (e ** 2));

        }
    });
    return z.sort((a, b) => a - b);
}
console.log(sortByArea([
    [3, 4], 22, 15, [10, 2]
]))