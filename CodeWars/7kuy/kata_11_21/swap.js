function swap(...arr) {
    if (arr.length == 2) {
        let test = arr.reverse();
        return test;
    } else {
        return false;
    }
}
console.log(swap(10, 20))