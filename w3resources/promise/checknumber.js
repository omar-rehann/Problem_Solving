function check(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            resolve("Sucsses Even Number");
        } else {
            reject("Succsses Odd Number");
        }
    })
}
check(5).then(
    (resolvevalue) => {
        console.log(resolvevalue);
        let x = 4;
        console.log(One opreation$ { x * 2 });
        console.log(One opreation$ { x * 4 });
        console.log(One opreation$ { x * 6 });
    },
    (rejectvalue) => {
        console.log(rejectvalue);
        let y = 5
        console.log(One opreation$ { y * 1 });
        console.log(One opreation$ { y * 3 });
        console.log(One opreation$ { y * 5 });
    }
)