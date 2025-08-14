/*

To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid could have equal sides (could be a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer



*/

function cubeChecker(volume, side) {
    let one = volume;
    let two = side * side * side;
    if (one <= 0 || two <= 0) {
        return false;
    } else if (one == two) {
        return true
    } else {
        return false;
    }
};
console.log(cubeChecker(0, 3))