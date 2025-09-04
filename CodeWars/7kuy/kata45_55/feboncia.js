/*
Your function febonicc (which seems to be intended to
generate the Fibonacci sequence) has a few issues. 
Let me explain and correct them:



*/

function febonicc(number) {
    let z = [0, 1];
    for (let i = 2; i < number; i++) {
        z.push(z[z.length - 1] + z[z.length - 2]);
    }
    return z
}
console.log(febonicc(5))