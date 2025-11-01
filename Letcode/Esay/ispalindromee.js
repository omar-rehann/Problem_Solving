/*
Problem: Palindrome Number
Given an integer x, return true if x is a palindrome, 
and false otherwise.
dont convert number to string 

An integer is a palindrome when it reads the same
backward as forward.


*/
function isPalindrome(number) {
    let original = number;
    let reversed = 0;

    while (number > 0) {
        let digit = number % 10;
        reversed = reversed * 10 + digit;

        number = Math.floor(number / 10);
    }

    return original === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(1221));
console.log(ispalindrome(10))