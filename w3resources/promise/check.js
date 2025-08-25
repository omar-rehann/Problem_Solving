function check(x) {
    return new Promise((resolve, reject) => {
        if (x % 2 == 0) {
            resolve("succses Return even number")
        } else {
            reject("Return Odd Number")
        }
    })
}
check(3).then(
    (resolvevalue) => console.log("Succses Return even number"),
    (rejctvalue) => console.log("sucsses retuen odd number")
)