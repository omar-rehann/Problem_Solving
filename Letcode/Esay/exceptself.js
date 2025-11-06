/*

Description:
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The algorithm must be written in O(n2) time complexity and without using the division operation.

*/
function exceptself(arr) {
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
        let newarr = arr.filter(function(index) { return index != i })
        let final = newarr.reduce(function(one, two) { return one * two });
        result.push(final)
    }
    return new Set([...result]);
}
console.log(exceptself([1, 2, 3, 4]))