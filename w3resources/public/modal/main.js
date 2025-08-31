let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal");
let icon = document.querySelector(".modal .icon .close");
btn.onclick = function() {
    modal.classList.toggle("active");
}
icon.onclick = function() {
    modal.classList.remove("active");

}