/*
This time no story, no theory. The examples 
below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/
function accum(s) {
    let arr = s.split("");
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i));
    }

    return result.join("-");
}

console.log(accum("abcd"));