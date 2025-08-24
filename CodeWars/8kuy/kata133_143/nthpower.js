/*
The ntPower function you've written correctly performs
the operation it describes: it takes an array and an index n,
retrieves the element at that index, and then raises that
element to the power of n.
*/
function ntPower(array, n) {
    let test = Array.from(array);
    let inedxelement = test[n];
    return inedxelement ** n
}
console.log(ntPower([1, 2, 3, 4, 5], 2))