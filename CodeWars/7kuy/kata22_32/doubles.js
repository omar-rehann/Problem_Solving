/*


In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.

For example:

doubles('abbcccdddda') = 'aca', because, from left to right:

*/

function doubles(s) {
    let stack = [];

    for (let char of s) {
        // لو آخر عنصر في stack زي الحرف الحالي نشيله
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

console.log(doubles("abbcccdddda")); // الناتج: "aca"