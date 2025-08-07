/*
🧠 Problem Title: Sum of Two Arrays

❓ Problem Statement:  
Write a function that takes two arrays of integers and returns the sum of all elements from both arrays combined.

📥 Input:  
- Two arrays `arr1` and `arr2`, each containing integers.

📤 Output:  
- An integer representing the total sum of all elements in both arrays.

📌 Example:  
- Input: [1, 2, 4], [2, 3, 5]  
  Output: 17  
- Input: [10], [20, 30]  
  Output: 60
*/
function plus(arr1, arr2) {
    let test = arr1.concat(arr2);
    let result = test.reduce(function(one, two) {
        return one + two
    })
    return result;
}
console.log(plus([1, 2, 4], [2, 3, 5]))