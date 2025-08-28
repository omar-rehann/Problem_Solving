/*
Your xor function correctly implements the Exclusive OR (XOR) logical
operation. It returns true only when its two inputs (a and b) 
are different (one is true and the other is false); 
otherwise, it returns false.


*/

function xor(a, b) {
    if (a == true && b == true) {
        return false
    } else if (a == false && b == false) {
        return false;
    } else {
        return true
    }
}
console.log(xor(true, false))