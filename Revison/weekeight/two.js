/*

6. Sort and Star

Sort a list of strings alphabetically, take the first one, and put *** between its letters.

*/
function twoSort(s) {
    return s.sort()[0].split("").join("***");
}