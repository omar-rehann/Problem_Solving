/*

Alternatively, you can round the square root and check if multiplying it by itself equals the original number:

*/
// 7 kata


var isSquare = function(n) {
    let sqrt = Math.round(n ** 0.5);
    return sqrt * sqrt === n;
};