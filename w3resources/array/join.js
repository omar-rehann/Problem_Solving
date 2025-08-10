/*
Join Array Elements

Write a simple JavaScript program to join 
all elements of the following
array into a string.Computer program generator

Sample array : myColor = ["Red", "Green", "White", "Black"];

Expected Output :

"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
function join(input) {
    let test = Array.from(input).join("");
    return test;
}
console.log(join([
    [1, 2, 3, 4], 2, 3, 4
]))