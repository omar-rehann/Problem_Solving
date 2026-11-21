/*

## 4. Student's Final Grade
 * Problem Description: Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and the number of completed projects.
   * This function should take two arguments: exam (from 0 to 100) and projects (from 0 and above).
   * It should return a number (final grade) based on these rules:
     * 100 if the exam is > 90 or projects > 10.
     * 90 if the exam is > 75 and projects >= 5.
     * 75 if the exam is > 50 and projects >= 2.
     * 0 in other cases.
 * Solution:
*/

// 7 kata
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    return 0;
}