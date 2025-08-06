/*
Largest of Five Numbers
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
Sample numbers : -5, -2, -6, 0, -1
Output : 0

*/
function sorttt(arr) {
    let test = Array.from(arr);
    let result = test.filter(function(e) {
        return e >= 0;
    })
    return result;
}
console.log(sorttt([0, -1, -4]))