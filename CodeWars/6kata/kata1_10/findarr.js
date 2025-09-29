/*
Consider the array [3,6,9,12]. If we generate all the combinations with repetition that sum to 12, we get 5 combinations: [12], [6,6], [3,9], [3,3,6], [3,3,3,3]. The length of the sub-arrays (such as [3,3,3,3] should be less than or equal to the length of the initial array ([3,6,9,12]).

Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n. For example:

find([3,6,9,12],12) = 5.
More examples in the test cases.

Good luck!

If you like this Kata, please try:

Array combinations

Sum of prime-indexed elements

ArraysFundamentalsCombinatorics
Ad
8 Reasons Why Codewarriors Practice Coding with Codewars
Not everyone trains the

*/
function find(arr, n) {
    let test = Array.from(arr);
    let z = [];

    // طول 1
    for (let i = 0; i < test.length; i++) {
        if (test[i] === n) {
            z.push([test[i]]);
        }

        // طول 2
        for (let j = i; j < test.length; j++) {
            if (test[i] + test[j] === n) {
                z.push([test[i], test[j]]);
                break;
            }

            // طول 3
            for (let k = j; k < test.length; k++) {
                if (test[i] + test[j] + test[k] === n) {
                    z.push([test[i], test[j], test[k]]);
                    break;
                }

                // طول 4
                for (let l = k; l < test.length; l++) {
                    if (test[i] + test[j] + test[k] + test[l] === n) {
                        z.push([test[i], test[j], test[k], test[l]]);
                        break;
                    }
                }
            }
        }
    }
    return z.length;
}

console.log(find([3, 6, 9, 12], 12));