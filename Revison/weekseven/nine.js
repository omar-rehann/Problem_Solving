/*
3. Expressions Matter

Given three integers, return the largest result possible by adding parentheses and using addition and multiplication.

*/
function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c
    );
}