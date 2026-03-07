/*

Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d),
return a string representation of the slope
of the line joining these two points.
For an undefined slope (division by 0), 
return undefined . Note that the "undefined" is case-sensitive.
*/
function slope([a, b, c, d]) {
    ي
    if (c - a === 0) {
        return "undefined";
    }
    const slopeValue = (d - b) / (c - a);
    return slopeValue.toString();
}

console.log(slope([1, 2, 3, 6])); // "2"
console.log(slope([1, 2, 1, 5])); // "undefined"
console.log(slope([6, 3, 2, 1])); // "-0.5"