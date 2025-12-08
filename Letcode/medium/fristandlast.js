function findFirst(nums, target) {
    let left = 0,
        right = nums.length - 1,
        first = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            first = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return first;
}

function findLast(nums, target) {
    let left = 0,
        right = nums.length - 1,
        last = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            last = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return last;
}

function find_F_L(nums, target) {
    let first = findFirst(nums, target);
    let last = findLast(nums, target);
    return [first, last];
}

console.log(find_F_L([1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 10], 8));