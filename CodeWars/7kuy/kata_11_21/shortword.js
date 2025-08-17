/*
The problem this code solves is to find the shortest word in
a given string of space-separated words.
*/
function shortWord(x) {
    let test = x.split(" ");
    let result = test.reduce(function(one, two) {
        return one.length < two.length ? one : two
    });
    return result;
}
console.log(shortWord("omar rehan ali"))