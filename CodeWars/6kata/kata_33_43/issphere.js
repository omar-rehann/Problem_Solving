/*

code wars
Question:
Write a function inSphere(coords, radius) that takes an array of coordinates and a radius.
The function should return true if the coordinates describe a point within or on the given radius of the origin, and false otherwise.
If the coordinates array is empty, the function should return true.
In mathematical terms:

x^2 + y^2 + z^2 + ... \le r^2




*/



function inSphere(coords, radius) {
    let test = Array.from(coords);
    let result = test.map(function(e) {
        return e ** 2;
    }).reduce(function(one, two) {
        return one + two;
    }, 0);
    let sphere_radius = radius ** 2;
    if (sphere_radius >= result) {
        return true
    } else {
        return false
    }
}
console.log(inSphere([6, 8], 5))