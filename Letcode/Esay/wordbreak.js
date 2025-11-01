/*
Problem Description:
Given a string s and a list of words wordDict,
determine if s can be segmented
into a space-separated sequence
of one or more dictionary words.
*/
function wordbreak(s, wordbreaks) {

    let result = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.slice(i, j);
            if (wordbreaks.includes(sub)) {
                result.push(sub);
            }
        }
    }
    return result;
}

console.log(wordbreak("leetcode", ["leet", "code"]));