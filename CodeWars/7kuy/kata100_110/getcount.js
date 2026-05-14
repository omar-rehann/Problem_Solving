/*
Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

StringsFundamentals
*/
function getCount(str) {
    let values = ["a", "e", "i", "o", "u"];
    let test = Array.from(str);
    let sum = 0;
    for (let i = 0; i < test.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (test[i] === values[j]) {
                sum++
            }
        }
    }
    return sum
}
console.log(getCount("javascript"))