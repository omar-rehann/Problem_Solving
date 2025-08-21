/*
The problem this code solves is to determine if a given string has 
an equal number of 'x's and 'o's (case-insensitive).
*/

function xo(str) {
    let test = Array.from(str);
    let x = [];
    let o = [];
    let result = test.filter(function(e) {
        if (e.toLowerCase() === "o") {
            o.push(e);
        } else if (e.toLowerCase() === "x") {
            x.push(e);
        }
    });
    if (x.length == o.length) {
        return true;
    } else {
        return false;
    }
}
console.log(xo("omarx"));