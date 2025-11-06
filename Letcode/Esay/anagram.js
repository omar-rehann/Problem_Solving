/*
Description:
Given an array of strings, group all the strings that are anagrams of each other.
Two strings are considered anagrams if they contain the same characters in a different order.


*/
function anagram(arr) {
    let test = Array.from(arr);
    let result = [];
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            let frist = test[i].split("").sort().join("");
            let second = test[j].split("").sort().join("");
            if (frist === second) {
                result.push([test[i], test[j]])
            }
        }
    }
    return result;
}
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]))