/*

Create a function that accepts an array of names,
and returns an array of each name with its first letter 
capitalized and the remainder in lowercase.

*/
function capMe(names) {
    let test = Array.from(names);
    let z = [];
    let result = test.map(function(e) {
        z.push(e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase());
    })
    return z;
}
console.log(capMe(["jo", "nelson", "jurie"]))