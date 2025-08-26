function positive(arr) {
    return new Promise((resolve, reject) => {
        let test = Array.from(arr);

        // check if any number is negative
        for (let i = 0; i < test.length; i++) {
            if (test[i] < 0) {
                reject("Some Number Negative");
                return; // مهم جداً علشان ما يكملش اللوب بعد reject
            }
        }

        // لو وصل هنا يبقى مفيش أرقام سالبة
        resolve("All Numbers Positive");
    });
}

positive([1, 2, 3, 4, -2]).then(
    (resolveValue) => console.log(resolveValue),
    (rejectValue) => console.log(rejectValue)
);