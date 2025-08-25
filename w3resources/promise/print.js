function print(number) {
    return new Promise((resolve, reject) => {
        if (!isNaN(number) && typeof number === 'number') {
            resolve("Success: Valid Number");
        } else {
            reject("Error: Not a valid number");
        }
    });
}
print(5)
    .then(
        (resolvevalue) => {
            console.log(resolvevalue);
            for (let i = 0; i < 5; i++) {
                console.log(i);
            }
        },
        (rejectvalue) => {
            console.log(rejectvalue + ", please try again.");
        }
    )
    .catch(error => {
        // A .catch block is good practice for handling errors in promises,
        // especially if you wanexpected errors not caught by the reject callback.
        console.error("An unexpected error occurred:", error);
    });

// Test with invalid input
console.log("\n--- Testing with invalid input ---");
print("omar")
    .then(
        (resolvevalue) => {
            console.log(resolvevalue);
            for (let i = 0; i < 5; i++) {
                console.log(i);
            }
        },
        (rejectvalue) => {
            console.log(rejectvalue + ", please try again.");
        }
    )
    .catch(error => {
        console.error("An unexpected error occurred:", error);
    });