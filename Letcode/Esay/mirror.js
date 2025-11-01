/*
codewars



Description:
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/
function mirror(text) {
    let test = text.split(" ");

    let reversed = test.map(function(e) {
        return Array.from(e).reverse().join("");
    });

    let maxLength = reversed.reduce(function(one, two) {
        return one.length > two.length ? one : two;
    }).length;

    let border = "*".repeat(maxLength + 4);

    let result = reversed.map(function(word) {
        let spaces = " ".repeat(maxLength - word.length);
        return *$ { word }
        $ { spaces } * ;
    });

    return [border, ...result, border].join("\n");
}

console.log(mirror("Hello world"));