function minimizeArrayValue(nums) {
    let prefixSum = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let avg = Math.ceil(prefixSum / (i + 1));
        result = Math.max(result, avg);

        console.log(i = $ { i + 1 }, prefixSum = $ { prefixSum }, ceil = $ { avg });
    }

    return result;
}

let nums = [3, 7, 1, 6];
console.log("Final Result:", minimizeArrayValue(nums));