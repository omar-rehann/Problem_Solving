/*
Here is a problem statement based on what this function actually does—computing the sum of an arithmetic progression from begin to end stepping by step (rather than finding a longest common prefix, as the function name suggests):

Problem: Sum of an Arithmetic Progression
Write a function sumArithmeticSeries(begin, end, step) that generates a sequence of numbers starting at begin, incrementing by step on each step while less than or equal to end, and returns their total sum.

Parameters
begin (number): The starting integer of the sequence.

end (number): The upper bound (inclusive) for values in the sequence.

step (number): The increment added to the current value on each iteration.

*/
var longestCommonPrefix = function(begin, end, step) {
    let count = []
    for (let i = begin; i <= end; i += step) {
        count.push(i)
    }
    let final = count.reduce((a, b) => {
        return a + b
    })
    return final;

};
console.log(longestCommonPrefix(2, 6, 2))