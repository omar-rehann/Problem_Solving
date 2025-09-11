/*
You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.

Good thing you can code!

Complete the function to return a dollar amount of how much change you have!

Valid types of change include:



*/
// Remember you have a CHANGE dictionary to work with ;)
function changeCount(change) {
    let z = [];
    let test = Array.from(change.split(" ")); // نحول النص Array بالكلمات

    for (let i = 0; i < test.length; i++) {
        if (test[i] === "penny") {
            z.push(0.01);
        } else if (test[i] === "nickel") {
            z.push(0.05);
        } else if (test[i] === "dime") {
            z.push(0.10);
        } else if (test[i] === "quarter") {
            z.push(0.25);
        } else if (test[i] === "dollar") {
            z.push(1.00);
        }
    }

    let result = z.reduce(function(one, two) {
        return one + two;
    }, 0);

    return $$ { result.toFixed(2) };
}

console.log(changeCount("dime penny dollar"));
// ➝ "$1.11"