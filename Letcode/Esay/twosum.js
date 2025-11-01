/*

📝 Description:

Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.

*/
function twosum(nums, target) {
    let test = Array.from(nums);
    let z = [];
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            if (test[i] + test[j] == target) {
                z.push(i, j)
            }
        }
    }
    return z;
}
console.log(twosum([2, 1, 7, 11, 15], 9))