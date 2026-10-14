/*

Question:  
Given the length (l) and width (w) of a 4-sided polygon (either a square or a rectangle), return its area if it is a square, or its perimeter if it is a rectangle.

Examples:

areaOrPerimeter(6, 10) → 32

areaOrPerimeter(3, 3) → 9
*/
const areaOrPerimeter = function(l, w) {
    if (l === w) {
        return l * w; // Area of square
    } else {
        return 2 * (l + w); // Perimeter of rectangle
    }
};