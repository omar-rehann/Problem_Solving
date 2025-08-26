/*

Your namesfilter function is a well-implemented 
solution for a common problem: filtering out specific
items (in this case, names) from a list.
It effectively uses the filter and includes array methods
to achieve its goal.


*/
function namesfilter(names) {
    let geese = ["omar", "ahmed", "ali", "mostafa", "mahmoud"];
    let result = names.filter(function(name) {
        return !geese.includes(name);
    });
    return result;
}
console.log(namesfilter(["maryam", "nour", "omar", "ali"]))