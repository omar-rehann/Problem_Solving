/*
Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

*/
function reverseWords(str) {
    let convert = str.split(" ").map(function(ele) {
        return Array.from(ele).reverse().join("");
    });
    return convert.join(" ");
}
console.log(reverseWords("omar nasser ali hassan rehan"))

/*
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/