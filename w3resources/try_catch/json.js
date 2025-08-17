/*

The problem this code attempts to solve is to 
validate a string using a regular expression and then 
parse it, handling any 
errors that occur during the process.

*/
function convert(str) {
    try {
        let regex = /^[^0-9].*\w+[^0-9]$/i;
        if (!str.match(regex)) {
            throw new error("Invalid string Try Agin")
        }
        return JSON.stringify(str);
    } catch (error) {
        return error.message;
    }
}
console.log(convert("omar rehan"));