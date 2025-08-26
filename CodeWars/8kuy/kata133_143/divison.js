/*
This method, which is supposed to return the result of dividing 
its first argument by its second, 
isn't always returning correct values. Fix it.
*/
function divison(a, b) {
    try {
        if (b == 0) {
            throw new Error("INvaldtion opreation")
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}
console.log(divison(10, 0))