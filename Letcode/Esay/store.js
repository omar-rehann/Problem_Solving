/*
Given a rotated sorted array of unique integers, find the minimum element in the array.
Your algorithm must run in O(log n) time.

*/


function sortedinrotate(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}

console.log(sortedinrotate([1, 2, 3, 4, 5, 6, 7, 0])); // Output: 0