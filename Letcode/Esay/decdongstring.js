1
var decodeString = function(s) {
    2
    let stackNums = [];
    3
    let stackStrings = [];
    4
    let currentString = "";
    5
    let currentNum = 0;
    6
    7
    for (let ch of s) {
        8
        if (!isNaN(ch)) {
            9 currentNum = currentNum * 10 + Number(ch);
            10
        } else if (ch === "[") {
            11 stackNums.push(currentNum);
            12 stackStrings.push(currentString);
            13 currentString = "";
            14 currentNum = 0;
            15
        } else if (ch === "]") {
            16
            let num = stackNums.pop();
            17
            let prevString = stackStrings.pop();
            18 currentString = prevString + currentString.repeat(num);
            19
        } else {
            20 currentString += ch;
            21
        }
        22
    }
    23
    24
    return currentString;
    25
};