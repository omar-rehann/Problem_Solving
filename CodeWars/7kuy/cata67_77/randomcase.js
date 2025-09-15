/*
Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:


*/
function randomCase(x) {
    let test = Array.from(x);
    let result = [];
    for (let i = 0; i < test.length; i++) {
        // نختار 0 أو 1 عشوائي بدل استخدام index
        let random = Math.random();
        if (random > 0.5) {
            result.push(test[i].toLowerCase()); // نستخدم i بدل random
        } else {
            result.push(test[i].toUpperCase());
        }
    }
    return result.join("");
}

console.log(randomCase("omar rehan"));

console.log(randomCase("omar rehan"))