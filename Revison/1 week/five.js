/*

    Title: Sum of positive
Task: You get an array of numbers,
    return the sum of all of the positives ones.
Example: [1, -4, 7, 12] => 1 + 7 + 12 = 20
Note: If there is nothing to sum, the sum is
default to 0.
*/
function sumpostive(nums) {
    const result = nums.filter((e) => {
        return e > 0 ? e : ""
    }).reduce((one, two) => {
        return one + two
    })
    return result
}