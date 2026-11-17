/*

Here are the problems and JavaScript solutions for the four coding challenges shown in the images:
### 1. Get the Middle Character (7 kyu)
 * Problem: You are given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


*/


//  7  kata

function getMiddle(s) {
    const middle = Math.floor(s.length / 2);
    return s.length % 2 === 0 ?
        s.slice(middle - 1, middle + 1) :
        s.charAt(middle);
}