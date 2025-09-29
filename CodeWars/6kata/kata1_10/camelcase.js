/*
Problem:
You are given a string in snake_case format (words separated by underscores).
Your task is to convert this string into camelCase format:

The first word should remain in lowercase.

Each subsequent word should start with an uppercase letter, followed by lowercase letters.


*/

function camelcase(s) {
    let test = s.split("_");
    let z = [];
    for (let i = 0; i < test.length; i++) {
        if (i == 0) {
            z.push(test[0])
        } else {
            z.push(test[i].slice(0, 1).toUpperCase() + test[i].slice(1));
        }
    }
    return z.join("");
}
console.log(camelcase("omar_nasser_rehan"))