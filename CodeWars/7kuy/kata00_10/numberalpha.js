/*

In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.


*/
function solve(s, k) {
    // نحول السلسلة لمصفوفة عشان نقدر نحذف بسهولة
    let arr = s.split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let char of alphabet) {
        for (let i = 0; i < arr.length && k > 0; i++) {
            if (arr[i] === char) {
                arr.splice(i, 1); // نحذف الحرف
                i--; // نرجع خطوة لأن المصفوفة قصرت
                k--; // نقلل عدد الحذف
            }
        }
    }
    return arr.join('');
}

// أمثلة
console.log(solve('abracadabra', 1)); // bracadabra
console.log(solve('abracadabra', 2)); // brcadabra
console.log(solve('abracadabra', 6)); // rcdbr
console.log(solve('abracadabra', 8)); // rdr
console.log(solve('abracadabra', 50)); // ""