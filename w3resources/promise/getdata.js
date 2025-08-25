function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;
            if (!ok) {
                resolve("Sucsses get data");
            } else {
                reject("Not Arrival Data");
            }
        }, 2000)
    });
}
getdata().then(
    (resolvevalue) => console.log("Data succsses arival"),
    (rejectvalue) => console.log("Rejct Please Try Agin")
)