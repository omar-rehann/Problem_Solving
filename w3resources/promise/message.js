const mypromise = new Promise((resolve, reject) => {
    let connect = false;
    if (connect) {
        resolve("Connection success");
    } else {
        reject("Connection failed");
    }
}).then(
    (resolvevalue) => console.log(resolvevalue), // لو نجح
    (rejectvalue) => console.log(rejectvalue) // لو فشل
);