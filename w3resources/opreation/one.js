/*
Problem Statement:
Write a function called absolute that takes a number x and returns its negative value if x is positive, otherwise returns x as it is.
*/
function absolute(x) {
    return x > 0 ? -x : x;
}
console.log(absolute(2))