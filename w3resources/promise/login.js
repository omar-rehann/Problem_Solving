function login(name, pass) {
    return new Promise((resolve, reject) => {
        if (isNaN(name) && typeof !isNaN(pass)) {
            resolve("Sucsses Login")
        } else {
            reject("Not Valdtion login")
        }
    })
}
login(122, 1234).then(
    (resolvevalue) => console.log("Sucsses login"),
    (rejectvalue) => console.log("Not valdtion try agin")
)