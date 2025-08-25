/*

Your viowelCount function is a great start to solving
the common problem of counting vowels in a string.
It correctly identifies
lowercase vowels and returns their total count.

*/

function viowelCount(str) {
    let test = Array.from(str);
    let change = ["a", "i", "o", "e", "u"];
    let result = test.filter(function(e) {
        return (e == "a"
            e == "i"
            e == "o"
            e == "e"
            e == "u");

    })
    return result.length
}
console.log(viowelCount("omar"))