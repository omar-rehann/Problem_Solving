/*


9. Count by X

Return an array containing the first n multiples of x.
*/
function countBy(x, n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
}