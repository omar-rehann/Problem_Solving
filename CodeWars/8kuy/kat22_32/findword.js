/**
 * Write a function called find_needle that takes an array of strings (haystack).
 * The function should return the index of the string "needle" inside the array.
 * If "needle" is not found, it should return -1.
 * 
 * Example:
 * find_needle(["omar","ahmed","ali","mora","shahd","needle"]) => 5
 */

function find_needle(haystack) {
    let test = Array.from(haystack);
    return test.indexOf("needle");
    return test
}
console.log(find_needle(["omar", "ahmed", "ali", "mora", "shahd", "needle"]))