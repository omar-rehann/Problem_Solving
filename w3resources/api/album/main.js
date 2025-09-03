fetch('https://jsonplaceholder.typicode.com/albums/').then((result) => {
    let data = result.json();
    return data
}).then((alldata) => {
    let parent = document.querySelector(".content");
    for (let i = 0; i < alldata.length; i++) {
        let result = `
                                    <tr>
                                        <td>${i}</td>

                                        <td>${alldata[i].userId}</td>
                                         <td>${alldata[i].title}</td>
                                    </tr>
                                `
        parent.innerHTML += result;
    }
})