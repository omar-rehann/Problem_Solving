/*
more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (b and B)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/
function duplicateCount(text) {
    let test = Array.from(text);
    let z = [];
    let result = test.map(function(e) {
        return e.toLowerCase();
    })
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] == result[j]) {
                z.push(result[i]);
                break;
            }
        }
    }
    return [...new Set(z)].length

}
console.log(duplicateCount("AABB"))