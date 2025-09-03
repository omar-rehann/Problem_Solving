/*
Problem Statement:
Write a function called day
that takes a numerical day and returns string day
corresponding message based on the day range 
using a switch statement.

*/
function day(number) {
    switch (number) {
        case 1:
            return "SuterDay"
            break;
        case 2:
            return "Sunday"
            break;
        case 3:
            return "Monday"
            break;
        case 4:
            return "Tuesday"
            break;
        case 5:
            return "Wedenday"
            break;
        case 6:
            return "thursday";
            break;
        case 7:
            return "Friday";
            break;
        default:
            return "please Try Agin"
            break;
    }
}
console.log(grade(5))