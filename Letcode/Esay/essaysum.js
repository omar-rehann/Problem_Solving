/*
3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which give the sum of zero.
*/
var threesum = function(nums) {
    let test = Array.from(nums);
    let z = [];
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            for (let k = i + 2; k < test.length; k++) {
                if (test[i] + test[j] + test[k] === 0) {
                    z.push([test[i], test[j], test[k]]);

                }
            }
        }
    }
    return z;
}
console.log(threesum([-1, 0, 1, 2, -1, -4]))