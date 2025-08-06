/*

Odd or Even Loop
Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
*/
function check(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {

            console.log(Even Number => $ { i })
        } else {
            console.log(Odd Number => $ { i })
        }
    }
}
check(10)