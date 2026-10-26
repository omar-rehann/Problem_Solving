/*

4. Online RPG: player to qualifying stage?

Check whether the player has at least 100 points to advance to the qualifying stage.

*/
function playerRankUp(points) {
    if (points >= 100) {
        return "Well done! You have advanced to the qualifying stage.";
    }
    return false;
}