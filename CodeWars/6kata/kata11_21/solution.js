/*

Description:
Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.



*/
function solution(...n) {
    let test = Array.from(n).length;
    let final = [...new Set(n)].length;
    if (test === final) {
        return false
    } else {
        return true
    }
}
console.log(solution([1, 2, 3, 4, 5, 6, 1]))