/*
Problem Statement:

Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in the form of a phone number:

*/
function createphone(nums) {
    let test = Array.from(nums);
    return ($ { test.slice(0, 3).join("") }) $ { test.slice(3, 6).join("") } - $ { test.slice(6).join("") }
}
console.log(createphone([1, 2, 3, 9, 8, 7, 6, 5, 4]))