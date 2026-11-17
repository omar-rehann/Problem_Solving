/*

### 3. Shortest Word (7 kyu)
 * Problem: Simple, given a string of words, return the length of the shortest word(s). The string will never be empty and you do not need to account for different data types.
 * Solution:


*/
// 7 kata
function findShort(s) {
    return Math.min(...s.split(" ").map(word => word.length));
}