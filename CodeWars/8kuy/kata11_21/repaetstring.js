/*
Question:
Write a function that will return the count of distinct case-insensitive alphabetic characters
 and numeric digits that occur more than once in the input string. The input string 
can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

*/
function repeatstr(n, s) {
    if (typeof n == "" &&
        typeof n == null && typeof n == isNaN) {
        alert("Please Try Agin")
    } else {
        let result = s.repeat(n);

        return result;
    }
}
console.log(repeatstr(5, "omar"))