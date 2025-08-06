/*

Find Second Lowest and Greatest
Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4


*/
function collection(arr) {
    let convert = Array.from(arr);
    let one = convert.reduce(function(one, two) {
        return one > two ? one : two
    })
    let two = convert.reduce(function(one, two) {
        return one < two ? one : two
    })
    return [one, two];
}
console.log(collection([10, 2, 1, 3, 4, 7]))