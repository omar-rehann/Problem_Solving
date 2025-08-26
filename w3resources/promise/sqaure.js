function sqare(x) {
    return new Promise((resolve, reject) => {
        if (!isNaN(x)) {
            resolve("Sucsses Data of type numeber=number")
        } else {
            reject("Invaldtion of datatype");
        }
    })
}
sqare(5).then(
    (resolvevalue) => console.log(5 ** 2),
    (rejectvalue) => console.log("Not Invalid Data")
)