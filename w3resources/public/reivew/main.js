function changecontent() {
    let allinformtion = [

        {
            "id": 1,
            "img": "avatar-02.png",
            "name": "omar rehan",
            "job": "front end developer",
            "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore reiciendis architecto harum distinctio expedita asperiores culpa numquam quaerat. Dolorum, voluptatem fuga cum odit tempore voluptas eveniet facere ea modi harum?"
        },
        {
            "id": 2,
            "img": "avatar-03.png",
            "name": "ali Mohmaed",
            "job": "Back end developer",
            "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore reiciendis architecto harum distinctio expedita asperiores culpa numquam quaerat. Dolorum, voluptatem fuga cum odit tempore voluptas eveniet facere ea modi harum?"
        },
        {
            "id": 4,
            "img": "avatar-04.png",
            "name": "Mohamed Ramdan",
            "job": "Full Stack developer",
            "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore reiciendis architecto harum distinctio expedita asperiores culpa numquam quaerat. Dolorum, voluptatem fuga cum odit tempore voluptas eveniet facere ea modi harum?"
        },
        {
            "id": 4,
            "img": "avatar-06.png",
            "name": "Bassem Ibrahem",
            "job": "Full Stack developer",
            "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore reiciendis architecto harum distinctio expedita asperiores culpa numquam quaerat. Dolorum, voluptatem fuga cum odit tempore voluptas eveniet facere ea modi harum?"
        }



    ]
    let index = Math.floor(Math.random() * allinformtion.length);
    let parent = document.querySelector(".continer");
    let result = `
         <div class="number">
                     <h4>${allinformtion[index].id}</h4>


        </div>
            <div class="image">
            <img src="${allinformtion[index].img}" alt="">

        </div>
        <div class="name">
            <h4>${allinformtion[index].name}</h4>

        </div>
        <div class="job">
            <h5>${allinformtion[index].job}</h5>

        </div>
        <div class="content">
        <p>${allinformtion[index].content}</p>
        </div>
        
        
        `
    parent.innerHTML = result;
}
setInterval(changecontent, 2000)