/*

The problem this code solves is to
find the middle character(s) of a given string.

*/
function middle(str) {
    let test = Array.from(str);
    if (test.length % 2 === 0) {
        // لو عدد الحروف زوجي → هيرجع حرفين في النص
        return test.slice(test.length / 2 - 1, test.length / 2 + 1).join("");
    } else {
        // لو فردي → هيرجع الحرف اللي في النص
        return test[Math.floor(test.length / 2)];
    }
}

console.log(middle("omar")); // "ma"
console.log(middle("omaer")); // "a"
console.log(middle("hello")); // "l"
console.log(middle("abcd")); // "bc"