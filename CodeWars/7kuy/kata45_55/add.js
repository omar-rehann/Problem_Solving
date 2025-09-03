/*
Write a function that adds from two invocations.
All inputs will be integers.
add(3)(4)  // 7
add(12)(20) // 32

*/

function add(number) {
    let result = ((two) => {
        return number + two
    });
    return (result);
}
console.log(add(5)(6))