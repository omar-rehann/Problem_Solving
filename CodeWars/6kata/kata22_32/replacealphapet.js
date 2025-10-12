/*
Given a string, replace every letter with its position in the English alphabet.
If anything in the text isn’t a letter, ignore it and don’t return it.
The output should be a string of numbers separated by spaces.


*/


function replacewithalphapet(string) {
    let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }
    let test = string.split("");
    let result = test.map(function(element) {
        return obj[element] ? obj[element] : ""
    }).join(" ")
    return result;

}
console.log(replacewithalphapet("The sunset sets at twelve o' clock."));