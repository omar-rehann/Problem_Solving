/*
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Complete the function. Two arguments will be given:

arr: An array that contains some integers (positve,negative or zero).
n: A positive integer. 1 <= n <= arr.length.
Your task is to find the minimum value of each n adjacent elements in arr. Returns by a new array. For example
*/
function minValue(arr, n) {
    let test = Array.from(arr);
    let z = [];
    for (let i = 0; i < test.length - n + 1; i++) {
        z.push(Math.min(...test.slice(i, i + n)))

    }
    return z;
}
console.log(minValue([4, 2, 5, 3, 2, 1]))