/*

Even Number Counter with Visualization
I'll create a complete web application that counts even numbers in an array and visualizes the process

*/


function count(array) {
    let test = Array.from(array);
    let z = [];
    let result = test.filter(function(e) {
        if (e % 2 == 0) {
            z.push(e);
        }
    })
    return z.length;
}
console.log(count([1, 2, 3, 4, 5, 6]))