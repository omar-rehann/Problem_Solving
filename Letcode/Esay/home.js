/*
Problem: House Robber

You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stored, and the only constraint preventing you from robbing all of them is that adjacent houses have security systems connected — if two adjacent houses are robbed on the same night, the police will be notified. 🚨

Given an integer array nums representing the amount of money in each house,
return the maximum amount of money you can rob tonight without alerting the police.

*/


function home(num) {
    let test = Array.from(num);
    let z = [];
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            if (j - i !== 1) {
                z.push(test[i] + test[j]);
            }
        }
    }
    return Math.max(...z);
}

console.log(home([1, 3, 2, 1]));