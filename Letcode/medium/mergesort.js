function mergeSort(arr) {
    // قاعدة الإيقاف: لو عنصر واحد → already sorted
    if (arr.length <= 1) return arr;

    // 1) نقسم لنصين
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // 2) نرتّب كل نص Recursively
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    // 3) ندمج النصين
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // نمشي على الـ 2 arrays ونضيف الأصغر
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // لو باقي عناصر في left
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // لو باقي عناصر في right
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

console.log(mergeSort([4, 2, 1, 3]));