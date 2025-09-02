/*
Find the difference between two collections. The difference
means that either the element is present in one collection or it is
present in other, but not in both. Return a sorted list with the
difference.
The collections can contain duplicates; the difference should not
contain
duplicates.
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]
*/
function diff(a, b) {
    let one = Array.from(a);
    let two = Array.from(b);
    let one_filter = one.filter(function(x) {
        return !b.includes(x)
    });
    let two_filter = two.filter(function(y) {
        return !one.includes(y)
    });
    let compined = [...one_filter, ...two_filter];
    let result = [...new Set(compined)];
    return result.sort()
}
console.log(diff(["a", "a", "t", "e", "f", "i", "j"], ["t", "g", "g", "i", "k", "f"]))