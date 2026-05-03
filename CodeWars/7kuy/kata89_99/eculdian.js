/*

Implement a function to calculate the distance between two points in n-dimensional space. The two points will be passed to your function as arrays of the same length.

Round your answers to two decimal places.
*/
function euclideanDistance(point1, point2) {
    let distance;
    let sum = 0;
    for (let i = 0; i < point1.length; i++) {
        distance = point1[i] - point2[i];
        sum += distance * distance
    }
    let result = Math.sqrt(sum);
    return result.toFixed(2)
}
console.log(euclideanDistance([1, 2, 3], [4, 5, 6]))