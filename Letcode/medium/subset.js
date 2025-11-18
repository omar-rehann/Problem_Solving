function subset(arr) {
    let test = Array.from(arr);
    let result = test.reduce((acc, curr) => {
        let newSubsets = acc.map(set => [...set, curr]);
        return acc.concat(newSubsets); // أضف الجديدة للقديمة
    }, [
        []
    ]); // ابدأ بمجموعة فارغة
    return result;
}

console.log(subset([1, 2, 3]));