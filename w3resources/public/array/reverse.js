/*
Problem with the rever function
The rever function you provided has an issue when dealing with certain Unicode characters, especially emojis, combined characters, and characters from some languages.

*/
function rever(str) {
    let test = Array.from(str).reverse().join("");
    return test;
}
console.log(rever("omarrehan"))