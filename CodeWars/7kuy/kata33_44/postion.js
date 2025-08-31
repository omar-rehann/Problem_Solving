/*
The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5


*/
function position(x, y, n) {
    // TODO: return consecutive integer at requested position
    let counter = 1;
    let result = [];
    let eq = ((y - (x - 1) * x / 2) / x);
    return eq + n;
}
console.log(position(4, 14, 3))