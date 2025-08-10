/*

Most Frequent Array Item

Write a JavaScript program to find 
the most frequent item in an array.

Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

Sample Output : a ( 5 times )
*/
function frequency(input, letter) {
    let test = Array.from(input);
    let result = test.filter(function(e) {
        return !isNaN(e) ? "" : e
    }).filter(function(e) {
        return e === letter ? e : ""
    })
    return result.length;
}
console.log(frequency([1, 2, 3, 4, 5, -1, -2, -4, "o", "a", "b", "c", "d", "o", "o"], "o"))