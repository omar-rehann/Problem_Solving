/*

The betteraverage function is designed to compare 
a student's score (yourpoint) against the average
score of a class (classpoint).

However, there's a critical error in how the average
student score is calculated. Instead of dividing the
sum of class points by the number of students in the class, 
it incorrectly divides by 2. This means averageStudent will not
represent the true average of the classpoint array.

*/



function betteraverage(classpoint, yourpoint) {
    let test = Array.from(classpoint);
    let result = test.reduce(function(one, two) {
        return one + two;
    });
    let averageStudent = result / 2;
    if (averageStudent > yourpoint) {
        return " The Your Point Less Than Student";
    } else if (averageStudent < yourpoint) {
        return " The Your Point Larger Than Student";

    } else {
        return " The Your Point Equal Than Student";
    }
}
console.log(betteraverage([10, 20, 40, 60, 100], 200))