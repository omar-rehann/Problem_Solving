/*

### 2. Return Two Highest Values in List
 * Problem Description: In this kata, your job is to return the two distinct highest values in a list. If there's less than 2 unique values, return as many of them, as possible. The result should also be ordered from highest to lowest.
 * Solution:
*/
// 7 kata
function twoHighest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.slice(0, 2);
}