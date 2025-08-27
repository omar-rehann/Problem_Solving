let updatepost = document.querySelector(".continer .post");
let all_user = document.querySelectorAll(".continer .user div");
fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
    let data = result.json();
    return data;
}).then((alldata) => {
    all_user.forEach((e, index) => {
        e.onclick = function() {
            updatepost.innerHTML = ``
            if (index == 0) {
                for (let i = 0; i < 5; i++) {
                    let frist = document.createElement("div");
                    let second = document.createElement("h4");
                    let second_text = document.createTextNode(`post${alldata[i].id}`);
                    second.appendChild(second_text);
                    let paragraph = document.createElement("p");
                    let p_node = document.createTextNode(`${alldata[i].title}`);
                    paragraph.appendChild(p_node);
                    frist.appendChild(second);
                    frist.appendChild(paragraph);
                    updatepost.appendChild(frist);

                }

            } else if (index == 1) {
                for (let i = 5; i < 10; i++) {
                    let frist = document.createElement("div");
                    let second = document.createElement("h4");
                    let second_text = document.createTextNode(`post${alldata[i].id}`);
                    second.appendChild(second_text);
                    let paragraph = document.createElement("p");
                    let p_node = document.createTextNode(`${alldata[i].title}`);
                    paragraph.appendChild(p_node);
                    frist.appendChild(second);
                    frist.appendChild(paragraph);
                    updatepost.appendChild(frist);

                }

            } else if (index == 2) {
                for (let i = 10; i < 15; i++) {
                    let frist = document.createElement("div");
                    let second = document.createElement("h4");
                    let second_text = document.createTextNode(`post${alldata[i].id}`);
                    second.appendChild(second_text);
                    let paragraph = document.createElement("p");
                    let p_node = document.createTextNode(`${alldata[i].title}`);
                    paragraph.appendChild(p_node);
                    frist.appendChild(second);
                    frist.appendChild(paragraph);
                    updatepost.appendChild(frist);

                }

            } else if (index == 3) {
                for (let i = 15; i < 20; i++) {
                    let frist = document.createElement("div");
                    let second = document.createElement("h4");
                    let second_text = document.createTextNode(`post${alldata[i].id}`);
                    second.appendChild(second_text);
                    let paragraph = document.createElement("p");
                    let p_node = document.createTextNode(`${alldata[i].title}`);
                    paragraph.appendChild(p_node);
                    frist.appendChild(second);
                    frist.appendChild(paragraph);
                    updatepost.appendChild(frist);

                }

            } else if (index == 4) {
                for (let i = 20; i < 25; i++) {
                    let frist = document.createElement("div");
                    let second = document.createElement("h4");
                    let second_text = document.createTextNode(`post${alldata[i].id}`);
                    second.appendChild(second_text);
                    let paragraph = document.createElement("p");
                    let p_node = document.createTextNode(`${alldata[i].title}`);
                    paragraph.appendChild(p_node);
                    frist.appendChild(second);
                    frist.appendChild(paragraph);
                    updatepost.appendChild(frist);

                }

            }
        }
    })




})