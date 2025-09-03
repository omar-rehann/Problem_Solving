/*

Problem Statement:
Write a function called replacce that takes a string
containing hyphens and replaces
all hyphens with spaces.
*/

function replacce(word) {
    let test = word.replaceAll("-", " ");
    return test;
}
console.log(replacce("omar-nasser-ali-hassan-reahn"))