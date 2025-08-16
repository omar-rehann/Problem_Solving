/*The problem this code solves is to safely convert
a string to a number, with built-in validation 
to handle invalid input by returning a specific error message.



*/
function convert(str) {
    try {
        if (!+str) {
            throw new Error("Invalid String")
        }
    } catch (error) {
        return error.message;
    }
    return +str
}
console.log(convert("7"))