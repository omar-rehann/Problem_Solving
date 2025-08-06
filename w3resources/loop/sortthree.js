/*

Sort Three Numbers
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results
*/
function sorttt(arr) {
    let final = [];
    let test = Array.from(arr);
    result = test.sort((a, b) => b - a)
    return result;
}
console.log(sorttt([0, -1, 4]))