/*
Oh no! Timmy's reduce is causing problems, 
Timmy's goal is to calculate the two teams scores and 
return the winner but timmy has gotten confused and sometimes
teams don't enter their scores, total the scores out of 3! Help 
Timmy fix his program!

Return true if team 1 wins or false if team 2 wins!

*/

function calculateTotal(team1, team2) {
    let t1s = team1.reduce((t, c, i) => t + c, 0);
    let t2s = team2.reduce((t, c, i) => t + c, 0);
    return t1s > t2s ? true : false;
};
console.log(calculateTotal([5, 7], [4, 6, 9]))