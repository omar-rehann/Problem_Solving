function solve(s) {
    let one = Array.from(s);
    let two = Array.from(s).reverse();

    if (one.join("") === two.join("")) {
        return "OK";
    }

    // جرّب نشيل حرف واحد من البداية أو النهاية ونشوف
    for (let i = 0; i < one.length; i++) {
        let arr1 = one.slice(0, i).concat(one.slice(i + 1));
        let arr2 = [...arr1].reverse();
        if (arr1.join("") === arr2.join("")) {
            return "remove one";
        }
    }

    return "not possible";
}

console.log(solve("abba")); // OK
console.log(solve("abca")); // remove one
console.log(solve("abcdef")); // not possible