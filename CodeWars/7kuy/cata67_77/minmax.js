/*

Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

You solution should return an array [smallest, minimumAbsent, largest]

The smallest integer should be the integer from the array with the lowest value.

The largest integer should be the integer from the array with the highest value.

The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.
*/
function minMinMax(array) {
    let test = Array.from(array);
    let result = test.sort((a, b) => a - b);
    let min = result[0];
    let max = result[result.length - 1];
    let minsubset = [];
    for (let i = min; i <= max; i++) {
        if (!result.includes(i)) {
            minsubset.push(i);
        }
        // minsubset.sort((a,b)=>a-b).slice(0,1).join("");
    }
    return [min, Number(minsubset.sort((a, b) => a - b).slice(0, 1).join("")), max];
}
console.log(minMinMax([3, 7, 5, 4, 9]))