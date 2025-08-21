function catchSignChange(arr) {
    if (arr.length === 0) return 0;
    let count = 0;

    // نحدد الإشارة الأولى
    let prev = arr[0] === 0 ? null : Math.sign(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i] === 0 ? null : Math.sign(arr[i]);

        // لو عندنا sign صالح
        if (curr !== null) {
            if (prev !== null && curr !== prev) {
                count++;
            }
            prev = curr; // نحدث الـ prev لآخر sign صالح
        }
    }

    return count;
}