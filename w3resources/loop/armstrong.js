/*
3-Digit Armstrong Numbers
Write a JavaScript program to find the Armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits
 is equal to the number itself.
 For example, 371 is an Armstrong number since 33 + 73 + 1**3 = 371.


*/
function armstrong(number) {
    let test = Array.from(String(number));
    let result = test.map(function(e) {
        console.log(Arm Strong => $ { e } ** 3);
    });

}
armstrong(371)