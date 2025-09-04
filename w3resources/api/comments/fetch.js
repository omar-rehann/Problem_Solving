fetch('https://jsonplaceholder.typicode.com/comments/').then((result) => {
    let data = result.json();
    return data;
}).then((alldata) => {
    let parent = document.querySelector(".content");
    for (let i = 0; i < 200; i++) {
        let result = `
            <td>${i}</td>
            <td>${alldata[i].postId}</td>
            <td>${alldata[i].email}</td>
            <td>${alldata[i].body}</td>

                    `
        parent.innerHTML += result;
    }



})