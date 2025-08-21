/*
Your getsqare function effectively determines
if a given number x is a perfect square.
A perfect square is an integer that is
the square of an integer (e.g., 9 is a perfect square because it's 3 
2
 ).



*/
function getsqare(x) {
    return Number.isInteger(Math.sqrt(x)) ? true : false;
}
console.log(getsqare(3))