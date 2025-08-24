/*
Your boss decided to save money by purchasing some 
cut-rate optical character
recognition software for scanning in the text of 
old novels to your database.
At first it seems to capture words okay, 
but you quickly notice that it throws in a lot of numbers at
random places in the text.
*/
function stringClean(s) {
    let test = s.split(" ");
    let result = test.map(function(e) {
        let test_one = Array.from(e);
        let test_two = test_one.filter(function(e) {
            return isNaN(e);
        }).join("");
        return test_two;
    });

    return result.join(" "); // هنا أضفنا join عشان يطلع string بالمسافات
}

console.log(stringClean('This looks5 grea8t!'));