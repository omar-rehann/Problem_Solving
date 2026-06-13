/*


Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/
function addLetters(...letters) {
    if (letters.length === 0) return "z";
    let collect = [];
    let sum = 0;
    letters.forEach((e) => {
        collect.push(e.charCodeAt(0) - 96);
    });
    for (let i = 0; i < collect.length; i++) {
        sum += collect[i];
    }
    sum %= 26;
    if (sum === 0) sum = 26;
    return String.fromCharCode(sum + 96);
}
console.log(addLetters("a", "b", "c"));
console.log(addLetters("a", "b"));
console.log(addLetters("z"));
console.log(addLetters("z", "a"));
console.log(addLetters("y", "c", "b"));
console.log(addLetters());