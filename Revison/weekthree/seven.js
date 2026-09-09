/*

3. Remove First and Last CharacterInstructions:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/
function removes(x) {
    return x.slice(1, -1)
}