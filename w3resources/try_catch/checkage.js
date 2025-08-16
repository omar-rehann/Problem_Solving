/*

The problem this code solves is to validate if a given
age is 18 or older, returning
the age if valid or a specific error message if it's below 18.

*/

function checkage(age) {
    try {
        if (+age < 18) {
            throw new Error("The Age Not Avilable Her ");
        }
        return +age
    } catch (error) {
        return error.message
    }
    // return age
}
console.log(checkage(10))