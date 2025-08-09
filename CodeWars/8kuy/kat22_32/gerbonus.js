/*
### ❓ Problem Statement: `getbonus(salary, bonus)`

You are asked to implement a function called `getbonus` that determines an employee’s final salary based on whether they receive a bonus.

#### Requirements:
- The function should accept two arguments:
  - `salary`: a number representing the employee’s base salary.
  - `bonus`: a boolean value indicating whether the employee receives a bonus.
- If either `salary` or `bonus` is an empty string (`""`), the function should display an alert with the message: `"Please Try again"`.
- If `bonus` is `true`, the employee receives 10 times their salary.
- If `bonus` is `false`, the employee receives their regular salary.

#### Example:
```javascript
getbonus(2000, true);   // returns 20000
getbonus(2000, false);  // returns 2000

*/
function getbonus(salary, bonus) {
    if (salary == "" || bonus == "") {
        alert("Please Try agin")
    } else if (bonus === true) {
        return salary * 10;
    } else {
        return salary;
    }
}
console.log(getbonus(2000, true))