/*
The problem this code attempts to solve is to 
filter a space-separated string of words, keeping only 
specific words ("omar" in this case),
and replacing all other words with a predefined error message.


*/


function search(content) {
    let test = content.split(" ");
    let result = test.map(function(e) {
        try {
            if (e !== "omar") {
                throw new error("Invalid Try Agin")
            }
            return e;
        } catch (error) {
            return error.message
        }
    });
    return result.join("");
}
console.log(search("omar nasser ali hassan rehan"))