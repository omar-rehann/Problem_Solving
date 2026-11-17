/*

### 4. Sort array by string length (7 kyu)
 * Problem: Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest. All strings in the array will be of different lengths.
 * Solution:

*/
//  7 kata
function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
}