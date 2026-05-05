/*
Find the area of a rectangle given its diagonal and one side. 
If the diagonal is less than or equal
to the side length, return "Not a rectangle".

*/
function area(d, l) {
    if (d <= l) return "Not a rectangle";
    let onthervaribale = Math.sqrt(Math.pow(d, 2) - Math.pow(l, 2));
    let area = onthervaribale * l;
    return area;
}
console.log(area(20, 3))