/*

Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

*/
function lottery(str) {
    let test = Array.from(str);
    let result = test.filter(function(e) {
        return !isNaN(e)
    }).join("")
    return result == "" ? "One more run!" : [...new Set(result)].join("")
}
console.log(lottery("555"))