/*
Your loves function checks if both flower1 and flower2 are 
even numbers. If both are even, 
it returns true; otherwise, it returns false.
*/
function loves(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(loves(2, 5))