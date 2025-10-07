/*
Task
The function is given a string with lower-case characters. 
Split the string into as many non-empty substrings as possible, 
such that each character appears in only one substring. 
Return the list of lengths of the resulting substrings.
*/

function splitString(s) {
    let lastIndex = {}; // نخزن آخر مكان ظهر فيه كل حرف

    // أول loop: نحفظ آخر occurrence لكل حرف
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    let result = [];
    let start = 0; // بداية substring
    let end = 0; // نهاية substring

    // تاني loop: نحدد حدود كل substring
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]); // أكبر اندكس لازم ندخله
        if (i === end) {
            // لما نوصل لآخر اندكس substring
            result.push(end - start + 1);
            start = i + 1; // نبدأ substring جديدة
        }
    }

    return result;
}

// أمثلة
console.log(splitString("abbccc")); // [1, 2, 3]
console.log(splitString("abbacdceef")); // [4, 3, 2, 1]
console.log(splitString("abacded")); // [3, 1, 3]
console.log(splitString("abcdea")); // [6]