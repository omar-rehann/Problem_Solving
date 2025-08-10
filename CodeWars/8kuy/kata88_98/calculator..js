/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.
You should return the result of applying the given operation to these numbers.
Note: In dynamically typed languages (JS, PHP, Python), the first and second arguments can be not numbers. In that case, return "unknown value".
If the given operation to perform on the two numbers is not one of the four mentioned above, you should:

*/
function calculator(a, b, sign) {
    if (isNaN(a) || isNaN(b)) {
        return 'unknown value';
    }
    switch (sign) {
        case '+':
            return +a + +b;
        case '-':
            return +a - +b;
        case '*':
            return +a * +b;
        case '/':
            return +a / +b; // هيسيب Infinity لو b=0
        default:
            return 'unknown value';
    }
}