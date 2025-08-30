async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json(); // لازم نستنى تحويل الـ response لـ JSON
        console.log(data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

getUsers();