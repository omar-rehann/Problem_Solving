/*
Email Pattern

Write a pattern that matches e-mail addresses.

The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _  { | } ~
Character . ( period, dot or fullstop) provided 
that it is not the first or last character and it will
not come one after the other.
omarrehan724@gmial.com
omarreho11@gmail.com
omarrehan@yahoo.com
*/
function checkPattern(email) {
    let regex = /^[^0-9].*\w+[0-9]*@\w+\Wcom^[0-9]/
    let result = email.match(regex);
    if (result) {
        return Sucsses Valdtion Pattern;
    } else {
        return Failed Sucsses Valdtion Pattern `;
    }
}
console.log(checkPattern("omarrehan1@yahoo.com999"))