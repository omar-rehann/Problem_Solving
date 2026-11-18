/*

### 5. Remove duplicates from list
 * Problem: Define a function that removes duplicates from an array of non-negative numbers and returns it as a result. The order of the sequence has to stay the same.
 * Solution:

*/
function distinct(a) {
    return [...new Set(a)];
}