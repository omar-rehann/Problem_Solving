/*
Write a function likes(names) that returns a string describing
who likes something, based on the number of names in the input array.


*/
function likes(names) {
    let test = Array.from(names);
    if (test.length == 0) {
        return " No Likes This"
    } else if (test.length < 3) {
        for (let i = 0; i < 3; i++) {
            return$ { test[i] }
            $ { test[i + 1] = "" }
            $ { test[i + 2] = "" }
            Likes This
        }
    } else {
        for (let i = 0; i < test.length; i++) {
            return $ { test[i] }
            and $ { test[i + 1] }
            and more like this
        }
    }
}
console.log(likes(["omar", "ahmed", "rehan"]))