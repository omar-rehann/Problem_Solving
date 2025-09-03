/*
Problem Statement:
Write a function called grade that takes a numerical grade and returns a corresponding message based on the grade range using a switch statement.

*/
function grade(grade) {
    switch (grade) {
        case grade > 90:
            return "Very VEry Good"
            break;
        case grade > 80:
            return "Very  Good"
            break;
        case grade > 70:
            return "Excellent"
            break;
        case grade > 60:
            return "Nice"
            break;
        default:
            return "please Try Agin"
            break;
    }
}
console.log(grade(5))