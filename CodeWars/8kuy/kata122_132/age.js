/*
8 kyu
Age Range Compatibility Equation
1074188% of 1,4303,402 of 10,637AcesOfGlory1 Issue Reported
 JavaScript Node v18.x VIM EMACS Instructions
Output
Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

Min=Age2
+
7
Min= 
2
Age
​
 +7

Max
=
2
⋅
(
Age - 7
)
Max=2⋅(Age - 7)

Minimum age
≤
Your age
≤
Maximum age
Minimum age≤Your age≤Maximum age

Task
Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so if the age <= 14, use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
You should floor all your answers so that an integer is given instead of a float (which doesn't represent age).
Return your answer in the form "[min]-[max]"

*/

function datingRange(age) {
    if (age > 14) {
        let min = Math.floor(age / 2 + 7);
        let max = Math.floor(2 * (age - 7));
        return `${min}-${max}`;
    } else {
        let min = Math.floor(age - age * 0.10);
        let max = Math.floor(age + age * 0.10);
        return `${min}-${max}`;
    }
}

console.log(datingRange(22)); // 18-30
console.log(datingRange(10)); // 9-11