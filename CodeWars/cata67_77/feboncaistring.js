/*

You will be given a number and your task is to return the nth fibonacci string. For example:

solve(2) = '010'
solve(3) = '01001'


*/
function solve(n) {
    // Base cases
    if (n === 0) return "0";
    if (n === 1) return "01";
    if (n === 2) return "010";

    // Initialize the first two strings
    let s0 = "0";
    let s1 = "01";
    let current = "010"; // s(2)

    // Generate Fibonacci strings iteratively
    for (let i = 3; i <= n; i++) {
        let next = current + s1; // s(n) = s(n-1) + s(n-2)
        s0 = s1; // Shift: s(n-2) = s(n-1)
        s1 = current; // Shift: s(n-1) = s(n)
        current = next; // Update current to s(n)
    }

    return current;
}

console.log(solve(3)); // Output: "01001"
console.log(solve(2)); // Output: "010"