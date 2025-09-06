/*

Given a long number, return all the possible sum of
two digits of it.
For example, 12345: all possible sum of two digits
from that number are:
*/
function digits(num) {
    let test = Array.from(String(num));
    let z = [];
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            z.push(+test[+i] + +test[+j])
        }
    }
    return z;
}
console.log(digits(12345)) //[3,4,5,6,5,6,7,7]