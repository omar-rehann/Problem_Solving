/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

*/
function noBoringZeros(n) {
    let test = Array.from(String(n));
    while (test.length > 1 && test[test.length - 1] === "0") {
        test.pop();
    }

    return parseInt(test.join(""));
}
console.log(noBoringZeros(1020300))