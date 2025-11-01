/*

✅ Problem: Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a stock on the i-th day.

You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell it.

Return the maximum profit you can achieve. If no profit can be made, return 0.

*/

function Best_time(arr) {
    let z = [];
    let test = Array.from(arr);
    for (let i = 0; i < test.length; i++) {
        for (let j = i + 1; j < test.length; j++) {
            let result = test[j] - test[i];
            if (result > 0) {
                z.push(result)
            }
        }
    }
    return z.length > 0 ? Math.max(...z) : ""
}
console.log(Best_time([7, 1, 5, 3, 6, 4]))