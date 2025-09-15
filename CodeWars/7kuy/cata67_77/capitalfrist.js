/*
Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

*/
/*
Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

*/
function capitalsFirst(str) {
    let test = str.split(' ');
    let start = [];
    let end = [];
    for (let i = 0; i < test.length; i++) {
        let firstChar = test[i][0];
        if (!/[a-zA-Z]/.test(firstChar)) {
            continue;
        }
        if (firstChar === firstChar.toUpperCase()) {
            start.push(test[i]);
        } else {
            end.push(test[i]);
        }
    }
    let final = start.concat(end);
    return final.join(" ");
}
console.log(capitalsFirst("hey You, Sort me Already!"))
console.log(capitalsFirst("123 baby You and Me"))
console.log(capitalsFirst("zgqpf3 #cm7xu Ni9jlc tgn# Zr05"))

console.log(capitalsFirst("hey You, Sort me Already!"))
console.log(capitalsFirst("hey You, Sort me Already!"))