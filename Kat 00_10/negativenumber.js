/*
Task: Convert Number to Negative or Zero
Write a function convert that takes a number n as input and returns:

0 if n is equal to 0.
The negative value of n if n is any other number (positive or negative).

*/
function convert(n) {
    if (n == 0) {
        return 0
    } else {
        return -n;
    }
}
console.log(convert(5))