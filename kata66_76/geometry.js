/*

Write a function that returns the total surface area and volume of a box.
The given input will be three positive non-zero integers: width, height, and depth.
The output will be language dependant, so please check sample tests for the corresponding data type
, (list, tuple, struct, query, etcetera).
*/
function getSize(width, height, depth) {
    let volume = width * height * depth;
    let surface = 2 * (width * height + width * depth + height * depth);
    let result = [surface, volume];
    return result;
}
console.log(getSize(10, 20, 30))