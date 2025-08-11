/*
  Problem: Check if a number is a palindrome. A palindrome is a number that reads the same backward as forward.
*/
function isPalindrome(x) {
    // Convert the number to a string and then to an array of characters.
    let one = Array.from(String(x));

    // Create a reversed version of the same array.
    let two = Array.from(String(x)).reverse();

    // Compare the joined strings. If they are the same, it's a palindrome.
    if (one.join("") === two.join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(1001)); // true
console.log(isPalindrome(-121)); // false