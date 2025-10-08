/*
Implement the function uniqueInOrder
which takes as argument a sequence and returns
a list of items without any elements with the same value
next to each other, preserving the original order of elements.


*/
function uniqeOrder(nums) {
    let test = Array.from(nums);
    return [...new Set(test)];
}
console.log(uniqeOrder("AABBCCDDAABB"))