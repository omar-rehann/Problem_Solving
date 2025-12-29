/*
Problem: Successful Pairs of Spells and Potions

You are given two positive integer arrays spells and potions, where spells[i] represents the strength of the *i-th* spell and potions[j] represents the strength of the *j-th* potion.
You are also given an integer success.

A pair of spell and potion is considered successful if:

spells[i] * potions[j] >= success

Return an integer array pairs where pairs[i] is the number of potions that form a successful pair with the *i-th* spell.

Each spell must be paired with all potions independently, and the order of the output array should match the order of the spells array.
*/
function spell_postion(spell, postion, sucsses) {
    let final = [];
    for (let i = 0; i < spell.length; i++) {
        let count = 0;
        for (let j = 0; j < postion.length; j++) {
            let result = spell[i] * postion[j];
            if (result > sucsses) {
                count++;
            }
        }
        final.push(count);
    }
    return final
}
console.log(spell_postion([5, 1, 3], [1, 2, 3, 4, 5], 7))