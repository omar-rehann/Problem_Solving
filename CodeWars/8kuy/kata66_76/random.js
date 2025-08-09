/*

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example (Input => Output):
35231 => [1,3,2,5,3] 0 => [0]
*/
function digitize(n) {
    let test = String(n);
    let result = Array.from(test).reverse();
    let final = result.map(function(e) {
        return +e;
    })
    return final;
}
console.log(digitize(35231))