/*

You have to create a function named reverseIt.

Write your function so that in the case a string or a 
number is passed in as the data , you will return the data in
reverse order. If the data is any other type, return it as it is.

Examples of inputs and subsequent outputs:

*/

function reverseIt(data) {
    let test;
    if (typeof data === "string") {
        test = Array.from(data)
        return test.reverse().join("");

    } else if (typeof data === "number") {
        test = Array.from(String(data));
        return Number(test.reverse().join(""));
    } else {
        return data;
    }
}
console.log(reverseIt([1, 2, 3]))