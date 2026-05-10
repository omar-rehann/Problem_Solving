/*

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return
*/
function evenLast(numbers) {
    if (numbers.length > 0) {
        let test = [];
        for (let i = 0; i < numbers.length; i++) {
            if (i % 2 == 0) {
                test.push(numbers[i])
            }
        }
        let final = test.reduce(function(one, two) {
            return one + two
        }, 0)
        return final * numbers[numbers.length - 1]
    } else {
        return 0
    }

}
console.log(evenLast([]))