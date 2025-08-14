/* This function takes a string 
of words, reverses their order,
and returns them as an array.
*/
function shuffler(str) {
    let test = str.split(" ").reverse();
    return test;
}
console.log(shuffler("omar rehan")); // Outputs: [ 'rehan', 'omar' ]