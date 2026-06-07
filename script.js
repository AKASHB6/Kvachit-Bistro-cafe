function menuview(){
    document.querySelector(".headerBar2").classList.toggle("active");
}
function toggleMenu() {
    document.querySelector(".headerBar2").classList.toggle("active");
}
// Menu image slider
const images = ["menu1.jpg", "menu2.jpg", "menu3.jpg", "menu4.jpg", "menu5.jpg"];
let index = 0;

function next() {
    index = (index + 1) % images.length;
    document.getElementById("menu-list").src = images[index];
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("menu-list").src = images[index];
}
document.querySelectorAll(".headerBar2 a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".headerBar2").classList.remove("active");
    });
});
setInterval(() => {
    next();
}, 4000); // changes image every 3 seconds
const imgElement = document.getElementById("menu-list");

function next() {
    if (!imgElement) return;
    index = (index + 1) % images.length;
    imgElement.src = images[index];
}