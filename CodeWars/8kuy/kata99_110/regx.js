/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.




*/
function spEng(sentence) {
    let regex = /\w*english\w*/i;
    let test = sentence.toLowerCase().match(regex);
    if (test) {
        return true;
    } else {
        return false
    }
}
console.log(spEng("abcnenglishsef"));