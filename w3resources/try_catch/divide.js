/*
The problem this code solves
is to safely divide two numbers while explicitly handling
and reporting an error if the divisor is zero.
*/
function divide(a, b) {
    try {
        if (b == 0) {
            throw new Error("Please Try Agin")
        }
        return a / b
    } catch (error) {
        console.log(error.message)
    }
}
console.log(divide(6, 0))