/*
  Problem: Write a function called "fakebinary" that takes a string of characters (letters and numbers) and returns a new string.
  In the new string, any digit less than 5 should be replaced with '0', and any digit 5 or greater should be replaced with '1'.
  All non-digit characters (letters) should remain unchanged.
  
  For example:
  - If the input is "omar4", the output should be "omar0".
  - If the input is "rehan8", the output should be "rehan1".
*/
function fakebinary(str) {
    let test = str.split('');
    let result = [];
    for (let i = 0; i < test.length; i++) {
        let char = test[i];
        if (!isNaN(parseInt(char))) {
            if (parseInt(char) >= 5) {
                result.push('1');
            } else {
                result.push('0');
            }
        } else {
            result.push(char);
        }
    }
    return result.join('');
}
console.log(fakebinary("omar4"));
console.log(fakebinary("rehan8"));