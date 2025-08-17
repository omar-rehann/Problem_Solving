/*
The problem this code solves is to remove 
duplicate elements from an array, 
producing a new array containing only unique values.


*/
let arr = [1, 1, 1, 2, 3, 4, 3];
// one method
let result = new Set(arr);
// two method;
let unique = arr.filter((value, index, self) => self.indexOf(value) === index);

// three method
let storage = [];

for (let i = 0; i < arr.length; i++) {
    if (!storage.includes(arr[i])) { // لو العنصر مش موجود في result
        storage.push(arr[i]); // ضيفه
    }
}

console.log(storage); // [1, 2, 3, 4]




console.log(unique);
console.log(result);