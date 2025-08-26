/*

Your move function calculates a new position 
based on an initial position and a roll value.
It applies a specific rule: double the roll and add 
it to the current position.
This is a common pattern in simple board games where a 
dice roll might move a player twice its face value.
*/
function move(postion, roll) {
    return roll * 2 + postion;
}
console.log(move(3, 6))