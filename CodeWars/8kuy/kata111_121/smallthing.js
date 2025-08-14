/*
The problem this code solves is to 
combine two strings by 
removing the first character of each and then
concatenating the remaining parts.


*/



let str1 = "AElzero";
let str2 = "ZAcademy";
let str3 = str1.slice(1) + str2.slice(1);
console.log(str3); // Elzero Academy