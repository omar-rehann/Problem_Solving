/*

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
 
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


*/
var longestCommonPrefix = function(strs) {
    let count = 0;
    let test = [];

    // استخدام حلقة لتمثيل الحروف بدلاً من المقارنة الخاطئة للكلمات
    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];
        let isMatch = true;

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) {
            test.push(currentChar);
            ++count;
        } else {
            break;
        }
    }

    return test.join("");
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));