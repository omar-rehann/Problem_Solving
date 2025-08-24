/*

Your jadencase function is an excellent and common solution
for the "Jaden Casing" problem, which involves capitalizing 
the first letter of each word in a string. It's well-written, concise,
and effectively uses core JavaScript array methods.
*/
function jadencase(str) {
    let test = str.split(' ').map(function(e) {
        return e[0].toUpperCase() + e.substring(1)
    }).join(" ");
    return test;
}
console.log(jadencase("omar nasser ali hassan rehan"))