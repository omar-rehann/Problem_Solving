let all_icon = document.querySelectorAll(".faq .box .frist i");
let all_box = document.querySelectorAll(".faq .box");
all_icon.forEach((e, index) => {
    e.onclick = function() {
        let test = Array.from(all_box);
        test[index].classList.toggle("active");
        if (e.classList.contains("fa-plus")) {
            e.classList.add("fa-x");
            e.classList.remove("fa-plus");

        } else {
            e.classList.remove("fa-x");
            e.classList.add("fa-plus");
        }

    }

})