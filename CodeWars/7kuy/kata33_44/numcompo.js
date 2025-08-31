/*
Consider a sequence of integers xs, and a target integer n. Your task is to write a function which counts how many combinations of indexes of xs meet two rules:

The size of the combination must be 1 less than the size of xs
The sum of elements corresponding to the indexes must equal n
For example:

*/

function numCombo(arr, num) {
    let count = 0;
    let test = Array.from(arr);

    for (let i = 0; i < test.length; i++) { // لازم تلف على كله
        let sum = 0;

        for (let j = 0; j < test.length; j++) {
            if (i != j) { // نستبعد العنصر عند i
                sum += test[j]; // نجمع الباقي
            }
        }

        if (sum == num) { // الشرط هنا بعد ما خلصت الجمع
            count++;
        }
    }

    return count;
}