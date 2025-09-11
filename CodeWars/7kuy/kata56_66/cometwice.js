/*
Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: "1123"

Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly "211213" will return "1221121113" (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings


*/
/*
Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

Example: "1123"

Here 1 comes twice so <count><integer> will be "21"
then 2 comes once so <count><integer> will be "12"
then 3 comes once so <count><integer> will be "13"
hence output string will be "211213".

Similarly "211213" will return "1221121113" (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

Return "" for empty, nil or non numeric strings


*/
function countMe(data) {
    if (!data || isNaN(data)) return "";

    let test = Array.from(data);
    let counter = 1;
    let z = [];

    for (let i = 0; i < test.length; i++) {
        if (test[i] === test[i + 1]) {
            counter++;
        } else {
            z.push(counter);
            z.push(test[i]);
            counter = 1; // reset counter
        }
    }
    return z.join("");
}

console.log(countMe("1123"));    // 211213
console.log(countMe("211213"));  // 1221121113
console.log(countMe(""));        // ""