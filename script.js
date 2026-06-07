function menuview() {
    document.querySelector(".headerBar2").classList.toggle("active");
}

function toggleMenu() {
    document.querySelector(".headerBar2").classList.toggle("active");
}

// Menu image slider
const images = [
    "/menu1.jpg",
    "/menu2.jpg",
    "/menu3.jpg",
    "/menu4.jpg",
    "/menu5.jpg"
];

let index = 0;
const imgElement = document.getElementById("menu-list");

function nextImage() {
    if (!imgElement) return;

    index = (index + 1) % images.length;
    imgElement.src = images[index];
}

function prevImage() {
    if (!imgElement) return;

    index = (index - 1 + images.length) % images.length;
    imgElement.src = images[index];
}

// Auto slide every 4 seconds
setInterval(nextImage, 4000);

// Close mobile menu after clicking a link
document.querySelectorAll(".headerBar2 a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".headerBar2").classList.remove("active");
    });
});