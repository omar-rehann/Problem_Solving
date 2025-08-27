/*
Create a function that accepts a string and a single character,
and returns an integer of the count of occurrences the 2nd
argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned
*/


function strCount(str, letter) {
    let test = Array.from(str)
    let check = [];;
    for (let i = 0; i < test.length; i++) {
        if (test[i] == letter) {
            check.push(test[i]);
        }
    }
    return check.length;
}
console.log(strCount("omar", "z"))