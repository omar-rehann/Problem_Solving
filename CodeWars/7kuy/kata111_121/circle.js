/*

Description:
Complete the function which will return the area of a circle with the given radius.

Returned value is expected to be accurate up to tolerance of 0.01.

If the radius is not positive, throw Error.

*/
function circleArea(radius) {
    if (radius <= 0) {
        throw new Error("Please Try Agin ")
    } else {
        let test = Math.PI * radius * radius
        return Number(test.toFixed(3))
    }
}
console.log(circleArea(68))