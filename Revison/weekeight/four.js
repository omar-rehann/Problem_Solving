/*

8. Short Long Short

Given two strings, return them combined as short + long + short.
*/
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
}