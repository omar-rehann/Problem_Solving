function getmessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("Sucsses data");
            } else {
                reject("Not Sucsses")
            }
        }, 5000)
    })
}
getmessage().then(
    (resolvevalue) => console.log("Hello World"),
    (rejectvalue) => console.log("Error Message")
)