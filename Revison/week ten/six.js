/*

### 2. Sum without highest and lowest number (8 kyu)
 * Problem: Sum all the numbers of a given array, except the highest and the lowest element (by value). If an empty ar
*/
// 7 kata
function sumArray(array) {
    if (!array || array.length <= 1) return 0;
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, val) => acc + val, 0);
}