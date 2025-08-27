/*

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:


*/

function correctPolishLetters(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        let ch = string[i];

        switch (ch) {
            case "ą":
                ch = "a";
                break;
            case "ć":
                ch = "c";
                break;
            case "ę":
                ch = "e";
                break;
            case "ł":
                ch = "l";
                break;
            case "ń":
                ch = "n";
                break;
            case "ó":
                ch = "o";
                break;
            case "ś":
                ch = "s";
                break;
            case "ź":
            case "ż":
                ch = "z";
                break;
            default: // لو مش حرف خاص، سيبه زي ما هو
                break;
        }

        result += ch;
    }

    return result;
}

// تجربة
console.log(correctPolishLetters("zażółć gęślą jaźń"));
// النتيجة: "zazolc gesla jazn"