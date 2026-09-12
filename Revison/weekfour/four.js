/*

3. To square(root) or not to square(root)

Question:
Return a new array with every number processed like this:
If the number has an integer square root, take this; otherwise square the number.

Answer:



*/
function squareOrSquareRoot(array) {
    return array.map(num => {
        const root = Math.sqrt(num);

        if (Number.isInteger(root)) {
            return root;
        }

        return num * num;
    });
}

Example:

    squareOrSquareRoot([4, 3, 9, 7, 2, 1]);
// [2, 9, 3, 49, 4, 1]