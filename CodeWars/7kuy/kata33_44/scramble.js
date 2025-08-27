/*

Given a string and an array of indices, 
rearrange the characters of the string so that each
character is placed at the position specified by the 
corresponding index in the array.


*/

function scramble(str, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = str[i];
    }
    return result.join('');
}

console.log(scramble("abcd", [0, 2, 1, 3]))