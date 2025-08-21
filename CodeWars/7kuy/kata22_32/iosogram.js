/*
This function
is designed to check if a string is an isogram,
which is a word or phrase
where no letter is repeated. The code works by
first sorting the letters of the input string, 
then creating a Set from the sorted array.
A Set in JavaScript only stores unique values, 
so if the original array and the Set have the same length,
it means there were no duplicate letters in the string.
However, the provided code has a couple of issues that prevent it 
from working correctly for all cases:

*/



function isogram(str) {
    let test = Array.from(str).sort();
    let result = new Set(test);
    if (test.length == result.size) {
        return true
    } else {
        return false
    }
}
console.log(isogram("omarr"))