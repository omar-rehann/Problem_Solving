/*

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


*/
function XO(str) {
    let test = Array.from(str);
    let o = [];
    let x = [];
    let result = test.map(function(one) {
        if (one.toLowerCase() == "o") {
            o.push(one)
        } else if (one.toLowerCase() == "x") {
            x.push(one)
        }
    })
    if (o.length == x.length) {
        return true
    } else {
        return false
    }
}
console.log(XO("ooxxxo"))