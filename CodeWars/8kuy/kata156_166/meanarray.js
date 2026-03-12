/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/
function getAverage(marks) {
    let number = marks.length;
    let total = marks.reduce(function(one, two) {
        return one + two;
    }, 0);
    let mean = total / number;
    return Math.floor(mean);
}
console.log(getAverage([2, 2, 2, 2]))