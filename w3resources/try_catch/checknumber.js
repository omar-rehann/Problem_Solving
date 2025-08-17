/*

The problem this code solves is to validate if a given input is a number,
 returning the number itself if valid or a specific error message if it's not a number.

*/

function enter_number(n) {
    try {
        if (isNaN(n)) {
            throw new Error("Invalid Input try agin")
        }
        return n;
    } catch (eror) {
        return eror.message
    }
}
console.log(enter_number(6))