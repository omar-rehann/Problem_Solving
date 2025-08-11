/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/
function initializeNames(name) {
    let names = name.split(" ");
    if (names.length <= 2) {
        return name;
    } else {
        let first = names[0];
        let last = names[names.length - 1];
        let initials = names.slice(1, -1).map(middleName => middleName[0] + ".");
        return [first, ...initials, last].join(" ");
    }
}