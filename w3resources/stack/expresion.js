// expression evalution
function evaluatePostfix(expression) {
    let stack = [];
    for (let token of expression) {
        if (!isNaN(token)) {
            stack.push(Number(token)); // لو رقم
        } else {
            let b = stack.pop();
            let a = stack.pop();
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(a / b);
                    break;
            }
        }
    }
    return stack.pop(); // النتيجة النهائية
}

console.log(evaluatePostfix(["3", "5", "2", "*", "+"])); // 13