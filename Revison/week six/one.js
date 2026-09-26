/*

If you can, try writing it in only one line of code.   
  (Opposite number):
Very simple, given an integer or a floating-point number, find its opposite.   
Examples:
1: -1   
14: -14   
-34: 34
*/
function opposite(nums) {
    let test = nums.map((e) => {
        return e > 0 ? -e : e
    })
    return test
}