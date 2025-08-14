/*
The problem presented by the code 
snippet is to extract the last 
character of a given string using multiple different
JavaScript methods and print it to the console.

*/
let st = "Elzero";
let test = st.split("");
// one method
console.log(test[test.length - 1]);
// two method
console.log(test.reverse("")[0]);
// three method
let result = test.filter(function(e) {
    return e == "o" ? e : ""
}).join("");
console.log(result);
// four method
console.log(st.charAt(test.length - 1));
// five method
console.log(test.reverse("").at(-1));
// Needed Output
/*
"o"
"o"
"o"
"o"
"o"
*/