function solve(arr) {
    let test = Array.from(arr);
    let z = [];

    // نجيب البداية
    let start;
    for (let i = 0; i < test.length; i++) {
        let check = false;
        for (let j = 0; j < test.length; j++) {
            if (test[j] * 2 === test[i] || test[j] / 3 === test[i]) {
                check = true;
                break;
            }
        }
        if (!check) {
            start = test[i];
            break;
        }
    }

    // نبدأ نكوّن التسلسل
    let current = start;
    z.push(current);

    while (z.length < test.length) {
        if (test.includes(current * 2)) {
            current = current * 2;
        } else if (current % 3 === 0 && test.includes(current / 3)) {
            current = current / 3;
        }
        z.push(current);
    }

    return z;
}

console.log(solve([12, 3, 9, 4, 6, 8]));